"use client";
import React, { useRef, useEffect } from "react";
import { useInfiniteUsers } from "@/hooks/userInfinteUsers";
import UserCard from "@/components/UserCard";

const InfiniteUserFeed = () => {
  const {
    data,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteUsers();

  const bottomRef = useRef<HTMLDivElement | null>(null);
console.log(data)
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });
    if (bottomRef.current) observer.observe(bottomRef.current);
    return () => observer.disconnect();
  }, [hasNextPage, fetchNextPage]);

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError)
    return <p className="text-center text-red-500">Error loading users.</p>;

  return (
    <div className="max-w-2xl mx-auto p-4 space-y-4">
      {data?.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.users.map((user: any) => (
            <UserCard key={user.id} user={user} />
          ))}
        </React.Fragment>
      ))}
      <div ref={bottomRef} className="h-10" />
      {isFetchingNextPage && <p className="text-center">Loading more...</p>}
      {!hasNextPage && (
        <p className="text-center text-gray-500">No more users.</p>
      )}
    </div>
  );
};

export default InfiniteUserFeed;

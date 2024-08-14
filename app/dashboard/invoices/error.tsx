"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // 오류 발생 시 해당 오류를 optional 로 알려준다
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">몬가... 몬가 일어나고 잇음 !</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // 클릭함으로써 해당 경로의 세그먼트를 다시 렌더링 시도
          () => reset()
        }
      >
        재 시 도
      </button>
    </main>
  );
}

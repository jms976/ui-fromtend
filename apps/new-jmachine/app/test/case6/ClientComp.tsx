'use client';

export default function ClientComp({ data }: { data: { message: string } }) {
  return <div>ServerChild: {data.message}</div>;
}

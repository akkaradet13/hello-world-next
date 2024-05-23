"use client"
import { useRouter } from 'next/navigation';

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log('click');
    router.push("/");
    // router.back();
    // router.forward();
    // router.replace("/");
  }
  return (
    <div>
      <h1>OrderProduct</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
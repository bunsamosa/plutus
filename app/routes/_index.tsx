import { DynamicContextProvider, DynamicWidget } from '@dynamic-labs/sdk-react-core';

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-2">Plutus</h1>
      <h2 className="text-xl mb-6">Your financial assistant</h2>
      <DynamicWidget/>
    </div>
  );
}

import React from 'react';

export default function Home() {
  return (
    <main className="min-h-screen font-sans bg-neutral-950">
      <section className="bg-neutral-900 flex flex-col items-center justify-center py-32 px-6 text-center border-b border-neutral-800">
        <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Soroban Zero-Knowledge Standard
        </h1>
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          The definitive standard for integrating zero-knowledge proofs on the Stellar network. Build privacy-preserving, verifiable smart contracts with seamless Soroban compatibility.
        </p>
        <button className="border border-neutral-500 text-neutral-300 px-8 py-3 bg-transparent hover:bg-white hover:text-black hover:border-white transition-all duration-300 font-medium text-lg">
          Get Started
        </button>
      </section>

      <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          <div className="flex flex-col">
            <h2 className="text-black text-2xl font-bold mb-4 tracking-tight">Zero-Knowledge Proofs</h2>
            <p className="text-neutral-600 leading-relaxed">
              Leverage advanced cryptographic protocols to verify state transitions and transaction validity without revealing the underlying sensitive data. Enable robust privacy for your decentralized applications.
            </p>
          </div>

          <div className="flex flex-col">
            <h2 className="text-black text-2xl font-bold mb-4 tracking-tight">Seamless Soroban Integration</h2>
            <p className="text-neutral-600 leading-relaxed">
              Native compatibility with Soroban smart contracts. Utilize standard interfaces and optimized host functions to deploy computationally intensive zero-knowledge verifiers securely on Stellar.
            </p>
          </div>

          <div className="flex flex-col">
            <h2 className="text-black text-2xl font-bold mb-4 tracking-tight">Verifiable Compute</h2>
            <p className="text-neutral-600 leading-relaxed">
              Offload complex computations off-chain while maintaining absolute on-chain guarantees. Generate succinct proofs that are cheap to verify, unlocking new scaling paradigms for decentralized finance.
            </p>
          </div>

        </div>
      </section>

      <footer className="bg-white border-t border-neutral-200 py-12 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500">
          <span className="mb-4 md:mb-0">
            © 2026 Soroban-ZK-Std
          </span>
          <a
            href="https://github.com/johdanike/Soroban-ZK-Std"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors duration-200"
          >
            edit this page on github
          </a>
        </div>
      </footer>
    </main>
  );
}
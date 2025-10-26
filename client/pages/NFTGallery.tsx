import { useState } from "react";
import { Zap, Share2, Download, Eye, ExternalLink } from "lucide-react";

const LOGO_URL = "https://cdn.builder.io/api/v1/image/assets%2F5b28f6891f9443469e73e62e1d9f2778%2F1437029880df4d3ca60e17eeef837ab6?format=webp&width=800";

interface NFT {
  id: number;
  name: string;
  taskDescription: string;
  points: number;
  completionDate: string;
  contractAddress: string;
  imageHash: string;
  contributors: string[];
}

export default function NFTGallery() {
  const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null);
  const [nfts] = useState<NFT[]>([
    {
      id: 1,
      name: "Sprint 1 Completion",
      taskDescription: "Successfully delivered AI capacity prediction feature",
      points: 42,
      completionDate: "2025-01-15",
      contractAddress: "0x1234...5678",
      imageHash: "Qm123abc",
      contributors: ["Ahmad", "Team Member 1", "Team Member 2"],
    },
    {
      id: 2,
      name: "Sprint 2 Completion",
      taskDescription: "Integrated blockchain wallet authentication system",
      points: 45,
      completionDate: "2025-01-29",
      contractAddress: "0x5678...9abc",
      imageHash: "Qm456def",
      contributors: ["Ahmad", "Team Member 3"],
    },
    {
      id: 3,
      name: "Milestone Achievement",
      taskDescription: "Launched MorphSprint AI MVP to production",
      points: 50,
      completionDate: "2025-02-12",
      contractAddress: "0x9abc...def1",
      imageHash: "Qm789ghi",
      contributors: ["Ahmad", "Entire Team"],
    },
  ]);

  const handleShare = (nft: NFT) => {
    const shareUrl = `https://opensea.io/assets/ethereum/${nft.contractAddress}`;
    const text = `I just minted an NFT for completing "${nft.name}" - ${nft.points} story points verified on blockchain! 🎉`;

    // Open share intent
    const encodedText = encodeURIComponent(text);
    const encodedUrl = encodeURIComponent(shareUrl);

    window.open(
      `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      "_blank"
    );
  };

  const handleViewOnchain = (contractAddress: string) => {
    window.open(
      `https://etherscan.io/address/${contractAddress}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950">
      {/* Navigation */}
      <nav className="border-b border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md bg-white/30 dark:bg-slate-950/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="MorphSprint AI" className="h-10 w-10 rounded-lg" />
            <span className="text-xl font-bold text-slate-900 dark:text-white font-display">
              MorphSprint AI
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/dashboard"
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Dashboard
            </a>
            <a
              href="/nft-gallery"
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors font-semibold"
            >
              NFT Gallery
            </a>
            <a
              href="/settings"
              className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Settings
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2 font-display">
            NFT Gallery
          </h1>
          <p className="text-slate-600 dark:text-slate-300">
            View and manage your achievement NFTs minted from completed sprints. Each NFT represents a milestone on the blockchain.
          </p>
        </div>

        {/* NFT Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {nfts.map((nft) => (
            <div
              key={nft.id}
              className="group rounded-xl overflow-hidden border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur hover:border-purple-400/50 dark:hover:border-purple-500/50 transition-all duration-300 cursor-pointer hover:shadow-xl"
              onClick={() => setSelectedNFT(nft)}
            >
              {/* NFT Image */}
              <div className="aspect-square bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-400/20 flex items-center justify-center overflow-hidden relative group-hover:scale-105 transition-transform duration-300">
                <div className="text-7xl opacity-30 group-hover:scale-110 transition-transform duration-300">
                  ◆
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <div className="text-white">
                    <p className="text-sm font-semibold">Contract:</p>
                    <p className="text-xs text-slate-300">{nft.contractAddress}</p>
                  </div>
                </div>
              </div>

              {/* NFT Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 font-display">
                      {nft.name}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-2">
                      {nft.taskDescription}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-700 dark:text-blue-300 text-xs font-bold whitespace-nowrap">
                    {nft.points} pts
                  </span>
                </div>

                <div className="mb-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                    Completed: {nft.completionDate}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {nft.contributors.map((contributor, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded-md text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        {contributor}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleShare(nft);
                    }}
                    className="flex-1 px-3 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                  >
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleViewOnchain(nft.contractAddress);
                    }}
                    className="flex-1 px-3 py-2 rounded-lg font-semibold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* NFT Detail Modal */}
        {selectedNFT && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedNFT(null)}
          >
            <div
              className="bg-white dark:bg-slate-900 rounded-xl max-w-2xl w-full max-h-96 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2 font-display">
                      {selectedNFT.name}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-300">
                      {selectedNFT.taskDescription}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedNFT(null)}
                    className="text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 text-2xl"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-400 mb-2">
                      Story Points
                    </h3>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">
                      {selectedNFT.points}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-400 mb-2">
                      Completion Date
                    </h3>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">
                      {selectedNFT.completionDate}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-400 mb-2">
                    Contract Address
                  </h3>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-100 dark:bg-slate-800">
                    <code className="text-sm text-slate-700 dark:text-slate-300 flex-1 break-all">
                      {selectedNFT.contractAddress}
                    </code>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(selectedNFT.contractAddress);
                      }}
                      className="px-3 py-1 text-sm rounded-lg bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                    >
                      Copy
                    </button>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-400 mb-3">
                    Contributors
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedNFT.contributors.map((contributor, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-slate-900 dark:text-white text-sm font-semibold"
                      >
                        {contributor}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      handleShare(selectedNFT);
                      setSelectedNFT(null);
                    }}
                    className="flex-1 px-4 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Share2 className="w-5 h-5" />
                    Share on Twitter
                  </button>
                  <button
                    onClick={() => {
                      handleViewOnchain(selectedNFT.contractAddress);
                      setSelectedNFT(null);
                    }}
                    className="flex-1 px-4 py-3 rounded-lg font-semibold text-white bg-slate-700 hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Eye className="w-5 h-5" />
                    View on Etherscan
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Statistics Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur text-center">
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 font-display">
              {nfts.length}
            </p>
            <p className="text-slate-600 dark:text-slate-300">NFTs Minted</p>
          </div>
          <div className="p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur text-center">
            <p className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2 font-display">
              {nfts.reduce((sum, nft) => sum + nft.points, 0)}
            </p>
            <p className="text-slate-600 dark:text-slate-300">Total Points Verified</p>
          </div>
          <div className="p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-900/50 backdrop-blur text-center">
            <p className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2 font-display">
              {nfts.reduce((sum, nft) => sum + nft.contributors.length, 0)}
            </p>
            <p className="text-slate-600 dark:text-slate-300">Contributors</p>
          </div>
        </div>
      </main>
    </div>
  );
}

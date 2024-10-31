import Link from "next/link";

export default function Header() {
	return (
		<header className="bg-court-blue border-b border-court-line">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* 로고 */}
					<Link
						href="/"
						className="text-white font-bold text-xl hover:opacity-90"
					>
						FirstServe
					</Link>

					{/* 네비게이션 링크 */}
					<nav className="flex gap-6">
						<Link
							href="/racket-box"
							className="text-white hover:text-tennis-ball transition-colors"
						>
							라켓 백과사전
						</Link>
						<Link
							href="/string-box"
							className="text-white hover:text-tennis-ball transition-colors"
						>
							스트링 백과사전
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
}

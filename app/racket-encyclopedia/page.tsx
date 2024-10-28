export default function RacketEncyclopedia() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-tennis-ball mb-6">라켓 백과사전</h1>
        
        <div className="bg-accent-blue/10 backdrop-blur-sm border-2 border-court-line rounded-lg p-6">
          <p className="text-court-line text-lg mb-4">
            테니스 라켓에 대한 모든 것을 알아보세요.
          </p>
          
          {/* 임시 컨텐츠 */}
          <div className="grid gap-4">
            <div className="p-4 bg-court-blue/50 rounded-lg border border-court-line">
              <h2 className="text-tennis-ball text-xl font-bold mb-2">라켓의 구조</h2>
              <p className="text-court-line">
                헤드, 샤프트, 그립 등 테니스 라켓의 기본 구조에 대해 알아봅니다.
              </p>
            </div>
            
            <div className="p-4 bg-court-blue/50 rounded-lg border border-court-line">
              <h2 className="text-tennis-ball text-xl font-bold mb-2">라켓의 특성</h2>
              <p className="text-court-line">
                무게, 밸런스, 스윙웨이트 등 라켓의 주요 특성을 설명합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StringEncyclopedia() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-tennis-ball mb-6">스트링 백과사전</h1>
        
        <div className="bg-accent-blue/10 backdrop-blur-sm border-2 border-court-line rounded-lg p-6">
          <p className="text-court-line text-lg mb-4">
            테니스 스트링의 모든 것을 알아보세요.
          </p>
          
          {/* 임시 컨텐츠 */}
          <div className="grid gap-4">
            <div className="p-4 bg-court-blue/50 rounded-lg border border-court-line">
              <h2 className="text-tennis-ball text-xl font-bold mb-2">스트링의 종류</h2>
              <p className="text-court-line">
                나일론, 폴리에스터, 천연거트 등 다양한 스트링의 특징을 알아봅니다.
              </p>
            </div>
            
            <div className="p-4 bg-court-blue/50 rounded-lg border border-court-line">
              <h2 className="text-tennis-ball text-xl font-bold mb-2">텐션과 패턴</h2>
              <p className="text-court-line">
                스트링 텐션의 영향과 다양한 스트링 패턴에 대해 설명합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

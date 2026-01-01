import React, { useState, useEffect } from 'react';
import { 
  Search, 
  ChevronRight, 
  ChevronLeft, 
  Globe, 
  ShoppingCart, 
  Facebook, 
  Twitter, 
  MapPin, 
  Phone, 
  Mail,
  Menu,
  X,
  FileText,
  Package,
  Star,
  Zap,
  Tag
} from 'lucide-react';

// --- 模擬數據 (Mock Data) ---
const NAV_MENU = [
  { name: 'OO 介紹', path: 'sunbox-introduce' },
  { name: '產品目錄', path: 'product-catalog', sub: ['網路設備', '伺服器元件', '影音傳輸'] },
  { name: '台銀專區', path: 'purchase-catalog' },
  { name: '代理品牌', path: 'brand-list' },
  { name: '產品技術', path: 'technique-list' },
  { name: '最新消息', path: 'news-list' },
  { name: '型錄下載', path: 'catalog-list' },
];

const BANNERS = [
  { id: 1, title: '專業影音傳輸解決方案', subtitle: 'OO 提供最穩定的訊號延伸器', color: 'bg-orange-500' },
  { id: 2, title: '台銀共同供應契約', subtitle: '政府採購專區，型號齊全', color: 'bg-blue-600' },
];

const PRODUCTS = [
  { id: 1, name: '4K HDMI 延伸器', model: 'oo-123-HDMI', tag: 'new', image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=200&h=150&fit=crop' },
  { id: 2, name: 'Cat6 網路交換器', model: 'SW-800-NET', tag: 'hot', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=200&h=150&fit=crop' },
  { id: 3, name: '專業機架式 PDU', model: 'oo-10U-AC', tag: 'none', image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=200&h=150&fit=crop' },
  { id: 4, name: 'USB-C 多功能轉接頭', model: 'oo-TYPEC-01', tag: 'new', image: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=200&h=150&fit=crop' },
];

const NEWS = [
  { date: '2023-12-01', type: '最新消息', title: 'OO 參加 2024 台北國際電腦展' },
  { date: '2023-11-25', type: '促銷活動', title: '年度清倉大拍賣，指定產品 5 折起' },
  { date: '2023-11-15', type: '最新消息', title: '新一代 8K 矩陣切換器正式上市' },
];

const BRANDS = [
  { name: 'O光軟體', img: '/brands/brand-a.png' },
  { name: 'HK OO', img: '/brands/brand-b.png' },
  { name: 'CLIMB', img: '/brands/brand-c.png' },
  { name: 'O霖實驗', img: '/brands/brand-d.png' },
];

const App = () => {
  const [activeBanner, setActiveBanner] = useState(0);
  const [activeNews, setActiveNews] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchCategory, setSearchCategory] = useState('產品');

  // 自動輪播
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBanner((prev) => (prev + 1) % BANNERS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // 最新消息自動輪播
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNews((prev) => (prev + 1) % NEWS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* 1. 表頭 (Header) */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="bg-gray-100 py-1 text-xs border-b">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <div className="flex gap-4">
              <span className="flex items-center gap-1 cursor-pointer font-bold"><Globe size={14} /> 繁體中文</span>
              <span className="text-gray-400 cursor-default">English (#)</span>
              <span className="text-gray-400 cursor-default">简体中文 (#)</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium">
                <ShoppingCart size={14} /> 線上購買
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
          {/* Logo (H1) */}
          <h1 className="text-3xl font-black text-blue-900 tracking-tighter">
            OO
          </h1>

          {/* 搜尋欄位 (規格書規定：產品、技術、消息三種) */}
          <div className="flex-1 max-w-xl hidden md:flex border rounded-md overflow-hidden bg-white">
            <select 
              className="bg-gray-50 px-3 py-2 border-r text-sm outline-none"
              value={searchCategory}
              onChange={(e) => setSearchCategory(e.target.value)}
            >
              <option>產品</option>
              <option>技術</option>
              <option>消息</option>
            </select>
            <input 
              type="text" 
              placeholder={`搜尋${searchCategory}...`} 
              className="flex-1 px-4 py-2 text-sm outline-none"
            />
            <button className="bg-blue-900 text-white px-5 py-2 hover:bg-blue-800 transition">
              <Search size={18} />
            </button>
          </div>

          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* 導覽列 */}
        <nav className={`bg-blue-900 text-white ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
          <div className="max-w-7xl mx-auto px-4">
            <ul className="flex flex-col md:flex-row">
              {NAV_MENU.map((item) => (
                <li key={item.path} className="group relative">
                  <a href="#" className="block py-3 px-5 hover:bg-blue-800 transition text-sm font-medium">
                    {item.name}
                  </a>
                  {item.sub && (
                    <ul className="hidden group-hover:block absolute left-0 w-48 bg-white text-gray-800 shadow-xl border-t-2 border-orange-500 py-2 z-50">
                      {item.sub.map(s => (
                        <li key={s}><a href="#" className="block px-4 py-2 hover:bg-gray-100 text-sm">{s}</a></li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* 2. 首頁 Banner (與規格書連動) */}
      <section className="relative h-[300px] md:h-[450px] overflow-hidden">
        {BANNERS.map((banner, idx) => (
          <div 
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 flex items-center justify-center text-white ${banner.color} ${activeBanner === idx ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="text-center px-4">
              <h2 className="text-4xl md:text-6xl font-bold mb-4">{banner.title}</h2>
              <p className="text-lg md:text-xl opacity-90">{banner.subtitle}</p>
            </div>
          </div>
        ))}
        <button 
          onClick={() => setActiveBanner((prev) => (prev - 1 + BANNERS.length) % BANNERS.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 p-2 rounded-full text-white"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={() => setActiveBanner((prev) => (prev + 1) % BANNERS.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 p-2 rounded-full text-white"
        >
          <ChevronRight size={32} />
        </button>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* 左側邊欄：產品分類 (規格書要求) */}
          <aside className="lg:col-span-1">
            <h3 className="bg-orange-500 text-white px-4 py-2 font-bold mb-4">產品目錄</h3>
            <ul className="bg-white border rounded shadow-sm">
              {['切換器', '分配器', '延伸器', '矩陣器', '轉換器', '網路設備', '機櫃與 PDU'].map(cat => (
                <li key={cat} className="border-b last:border-0">
                  <a href="#" className="flex items-center justify-between px-4 py-3 hover:bg-orange-50 text-sm group">
                    {cat} <ChevronRight size={14} className="text-gray-300 group-hover:text-orange-500" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 bg-blue-50 border border-blue-100 p-4 rounded">
              <h4 className="font-bold text-blue-900 border-b border-blue-200 pb-2 mb-3">台銀專區</h4>
              <p className="text-xs text-blue-700 leading-relaxed">提供共同供應契約產品，採購案號：AA-000000</p>
              <button className="mt-4 w-full bg-blue-900 text-white py-2 text-sm rounded hover:bg-blue-800">進入專區</button>
            </div>
          </aside>

          {/* 右側內容：新品上市 & 熱銷商品 (規格書要求) */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between border-b-2 border-blue-900 mb-6 pb-2">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Zap className="text-orange-500" /> 新品上市 & 熱銷商品
              </h3>
              <a href="#" className="text-sm text-gray-500 hover:text-blue-900">查看更多 +</a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {PRODUCTS.map(prod => (
                <div key={prod.id} className="bg-white p-2 border hover:shadow-md transition group relative">
                  {prod.tag !== 'none' && (
                    <span className={`absolute top-0 left-0 px-2 py-1 text-[10px] font-bold uppercase text-white z-10 ${prod.tag === 'new' ? 'bg-green-500' : 'bg-red-500'}`}>
                      {prod.tag}
                    </span>
                  )}
                  <div className="aspect-[4/3] overflow-hidden mb-2">
                    <img src={prod.image} alt={prod.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
                  </div>
                  <h4 className="text-sm font-bold truncate mb-1">{prod.name}</h4>
                  <p className="text-xs text-gray-400 mb-2">{prod.model}</p>
                  <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">規格書描述：最多顯示 37 個字...</p>
                </div>
              ))}
            </div>

            {/* 消息跑馬燈 (規格書要求) */}
            <div className="bg-white border shadow-sm mb-12">
              <div className="flex">
                <div className="bg-blue-900 text-white px-4 py-3 text-sm font-bold whitespace-nowrap">最新動態</div>
                <div className="flex-1 overflow-hidden relative h-[44px]">
                  {NEWS.map((item, idx) => (
                    <div 
                      key={idx} 
                      className={`absolute inset-0 px-4 flex items-center gap-3 transition-opacity duration-500 ${activeNews === idx ? 'opacity-100' : 'opacity-0'}`}
                    >
                      <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded whitespace-nowrap">{item.type}</span>
                      <span className="text-sm truncate flex-1 hover:text-blue-600 cursor-pointer">{item.title}</span>
                      <span className="text-xs text-gray-400 font-mono whitespace-nowrap">{item.date}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 品牌專區 (規格書要求 133*45 小圖) */}
            <div className="border-t pt-8">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Tag className="text-blue-900" size={20} /> 代理品牌專區
              </h3>
              <div className="flex flex-wrap gap-4">
                {BRANDS.map(brand => (
                  <div key={brand.name} className="border p-2 grayscale hover:grayscale-0 transition cursor-pointer bg-white">
                    <img src={brand.img} alt={brand.name} className="w-[120px] h-[120px] object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* 3. 表尾 (Footer) */}
      <footer className="bg-gray-800 text-gray-300 pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-8 border-b border-gray-700 pb-8">
          <div>
            <h4 className="text-white font-bold mb-4">OO股份有限公司</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2 items-start"><MapPin size={16} className="mt-1 flex-shrink-0" /> oo市oo區oo路oo號</li>
              <li className="flex gap-2 items-center"><Phone size={16} /> 02-0000-0000</li>
              <li className="flex gap-2 items-center"><Mail size={16} /> sales@oo.com.tw</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">快速連結</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <a href="#" className="hover:text-orange-400">產品型錄</a>
              <a href="#" className="hover:text-orange-400">技術支援</a>
              <a href="#" className="hover:text-orange-400">促銷活動</a>
              <a href="#" className="hover:text-orange-400">交通導引</a>
              <a href="#" className="hover:text-orange-400">品牌介紹</a>
              <a href="#" className="hover:text-orange-400">聯絡我們</a>
            </div>
          </div>
          <div className="text-right">
            <h4 className="text-white font-bold mb-4 text-left md:text-right">分享本站</h4>
            <div className="flex justify-start md:justify-end gap-3">
              <button className="bg-blue-600 p-2 rounded hover:bg-blue-500"><Facebook size={20} /></button>
              <button className="bg-sky-400 p-2 rounded hover:bg-sky-300"><Twitter size={20} /></button>
              <button className="bg-red-500 p-2 rounded hover:bg-red-400"><Globe size={20} /></button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center text-xs opacity-50">
          <p>© 2024 OO. All Rights Reserved. 網頁設計符合規格書參數設定內容。</p>
        </div>
      </footer>
      
      {/* 右下角共同按鈕 (規格書要求) */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-2">
        <button className="bg-orange-500 text-white px-4 py-2 text-xs font-bold rounded shadow-lg hover:bg-orange-600">回首頁</button>
        <button className="bg-gray-700 text-white px-4 py-2 text-xs font-bold rounded shadow-lg hover:bg-gray-800">回上頁</button>
      </div>
    </div>
  );
};

export default App;
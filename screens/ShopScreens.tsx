import React from 'react';
import { Button, Icon, Header } from '../components/Shared';
import { ScreenName } from '../types';

export const ShopHomeScreen: React.FC<{ onNavigate: (s: ScreenName) => void }> = ({ onNavigate }) => {
  return (
    <div className="pb-20">
      <Header title="Cửa hàng & Dịch vụ" leftIcon="arrow_back" rightIcon="shopping_cart" onLeftClick={() => onNavigate(ScreenName.HOME)} onRightClick={() => onNavigate(ScreenName.CART)} />
      <div className="px-4 mt-2">
        <div className="bg-primary/10 rounded-xl h-12 flex items-center px-4 gap-2">
          <Icon name="search" className="text-primary" />
          <input type="text" placeholder="Tìm kiếm pate, cát vệ sinh..." className="bg-transparent w-full outline-none placeholder:text-primary/60 text-zinc-900" />
        </div>
        <div className="flex gap-2 mt-4 overflow-x-auto no-scrollbar">
          {['Tất cả', 'Sản phẩm', 'Dịch vụ', 'Thức ăn'].map((t, i) => (
            <button key={t} className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap ${i === 0 ? 'bg-primary text-zinc-900' : 'bg-primary/10 text-zinc-900'}`}>
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 pl-4 overflow-x-auto no-scrollbar">
        <div className="flex gap-4 w-max pr-4">
           {/* Promo Banner 1 */}
           <div className="w-72 bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col">
             <div className="h-32 bg-cover bg-center" style={{backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuAqaNE8fqOQYFCyHPmXhRUXTbA211QwLw1fu28f_cjVyBloozp9ar3BgDS64tqJw-hT0HS9IP9X9xaasa2YNrQC4csGizoi7lJogKDiiwlwl4BQaqiFbqYjDTZabfKZ8uTAkgVQ8bSWRHSgUsZBt81OjGNTBURiemzVPaLzd7qbSGj65t5OJQXvanIgtQ8DMZOmVevYf42fiPGvMjWTSBOlx7xszRaoaDBIfAMtz9jkqZw0hNxREpw41citqNM4lOQy_Xag9N2oXQ)'}}></div>
             <div className="p-4 flex flex-col gap-2">
               <h3 className="font-bold">Thức ăn mới - Giảm ngay 20%</h3>
               <p className="text-xs text-zinc-500 mb-2">Ưu đãi đặc biệt cho khách hàng mới</p>
               <Button className="h-9 text-sm" onClick={() => onNavigate(ScreenName.PRODUCT_DETAIL)}>Xem ngay</Button>
             </div>
           </div>
           {/* Promo Banner 2 */}
           <div className="w-72 bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col">
             <div className="h-32 bg-cover bg-center" style={{backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuCGM5cR2TCK_0tVnl67Qop9shZrKcBAHvgcPGBSbcC2lIZQGfP7VDC1CWkvPsYEBl57VvnkbC_tU9vevhrbNiexqawcKOY4C3MPUdr7jE4_4JA_1fsi0bWdkqqsRW4poyqHH36Nq7CKK_70vODg1IYi2t8StGngdBQtb3RDTMPkxwVTzmr7-TsnmHzhViLRyiHI5UcqUfixIPwc58xXzmZhQnkrh5j8IRbhBB8qLub2jcXkuS3lKNLIBQNwNifzu1WGDYSIBavi4g)'}}></div>
             <div className="p-4 flex flex-col gap-2">
               <h3 className="font-bold">Grooming spa - Ưu đãi tháng 10</h3>
               <p className="text-xs text-zinc-500 mb-2">Đặt lịch ngay hôm nay!</p>
               <Button className="h-9 text-sm" onClick={() => onNavigate(ScreenName.CLINIC_DETAIL)}>Xem ngay</Button>
             </div>
           </div>
        </div>
      </div>

      <div className="px-4 mt-6">
        <h2 className="text-xl font-bold mb-4">Sản phẩm phổ biến</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: 'Hạt khô Royal Canin', price: '250.000đ', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDduJtytH7cYGWxZN0fo5um-a4nkj370zw9djOIogBH7SbbenCRNyX2MNotobE9S9p1uXBerBpAUJ9DOMr6o1kbF2dyntIgioffsPVaLgtaWneF859UUVS8YywTSmogjQzWmI4caROqBH3pStjre0T9dXG1Ha2UpLZhn3hKHQMlAbPEsKB2b4LHaj1VSKhIlr0RA2YsEryk6wKISBSPjdPRDn8NEoQTeE0k94RmD_qM-fqJxC2zX0TK4SwuEzGR61TGHADn889GPw', rating: '4.9 (1.2k+)' },
            { name: 'Cần câu mèo lông vũ', price: '75.000đ', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQIzTMszl5VRQWc4UHekY3zQAYfrBfUVb2Y1AYxmPr7JEFwcou9ex-FiM1T5ErNdY6mTC2t0clWLPyKjLAmlhaUQhH4EcioLw219QC9Mgakk-23rAw8LXczuHXItdyqXr0QFfYRWvrkZR_0EnWHlUfwOiqHoIijSihfVKVkt-NJrTQat4zVc6TSiYkeCxtbYIXsUScWuZfSatD0r4Spafsl8ey9mIxee9LujRPE9v7dwfTsKlv4HTkLfBKgSeWoj-UyoV8h5OPMQ', rating: '4.8 (890)' },
            { name: 'Pate Whiskas vị cá', price: '25.000đ', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdIkFOdc3hjY4QUjMZQIVL6Ro0UhmuUvBPvhsyUd96S33-6uSclAtSxb9VE3zhxptVz5NaitetKJ0oFnvDDJEQtAImL9fgeQn36h__B5winWL2_A35klEriZVCUSYXmEBif08wqv5bXq32uFRNs428XVGzutIUFutxJHcCUBQnTdrxL5PCqr5eOdjch5ZVCRlL5v9Bfg20Ga2offhbpaY30LxxL3tCBcSkxwkuOphxOUXc7LBCewVoz3p5MLph6Slh32egLX0vOQ', rating: '4.9 (2.5k+)' },
          ].map((p, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden" onClick={() => onNavigate(ScreenName.PRODUCT_DETAIL)}>
              <div className="aspect-square bg-cover bg-center" style={{backgroundImage: `url(${p.img})`}}></div>
              <div className="p-3">
                <h4 className="font-semibold text-sm truncate">{p.name}</h4>
                <div className="flex items-center gap-1 text-xs text-zinc-500 mt-1 mb-2">
                  <Icon name="star" className="text-yellow-400 !text-sm filled" /> {p.rating}
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold">{p.price}</span>
                  <button className="bg-primary h-8 w-8 rounded-lg flex items-center justify-center"><Icon name="add_shopping_cart" className="!text-lg" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary shadow-lg flex items-center justify-center text-zinc-900 z-20">
        <Icon name="support_agent" className="!text-3xl" />
      </button>
    </div>
  );
};

export const ProductDetailScreen: React.FC<{ onNavigate: (s: ScreenName) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-background-light min-h-screen pb-24">
      <div className="relative h-96 w-full">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuDduJtytH7cYGWxZN0fo5um-a4nkj370zw9djOIogBH7SbbenCRNyX2MNotobE9S9p1uXBerBpAUJ9DOMr6o1kbF2dyntIgioffsPVaLgtaWneF859UUVS8YywTSmogjQzWmI4caROqBH3pStjre0T9dXG1Ha2UpLZhn3hKHQMlAbPEsKB2b4LHaj1VSKhIlr0RA2YsEryk6wKISBSPjdPRDn8NEoQTeE0k94RmD_qM-fqJxC2zX0TK4SwuEzGR61TGHADn889GPw)'}}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background-light via-transparent to-transparent"></div>
        <div className="absolute top-4 left-4 right-4 flex justify-between">
          <button onClick={() => onNavigate(ScreenName.SHOP_HOME)} className="h-10 w-10 bg-black/30 text-white rounded-full flex items-center justify-center backdrop-blur-sm"><Icon name="arrow_back" /></button>
          <div className="flex gap-2">
            <button className="h-10 w-10 bg-black/30 text-white rounded-full flex items-center justify-center backdrop-blur-sm"><Icon name="favorite_border" /></button>
            <button className="h-10 w-10 bg-black/30 text-white rounded-full flex items-center justify-center backdrop-blur-sm relative" onClick={() => onNavigate(ScreenName.CART)}>
              <Icon name="shopping_cart" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-primary text-[10px] flex items-center justify-center rounded-full font-bold text-black">2</span>
            </button>
          </div>
        </div>
      </div>
      <div className="px-6 -mt-8 relative z-10">
        <h1 className="text-2xl font-bold leading-tight">Hạt khô Royal Canin cho mèo Anh Lông Ngắn</h1>
        <p className="text-zinc-500 mt-1">Dành cho mèo trưởng thành trên 12 tháng tuổi</p>
        
        <div className="flex items-center justify-between mt-4">
          <span className="text-3xl font-extrabold">250.000đ</span>
          <div className="flex items-center gap-4 bg-primary/20 px-4 py-2 rounded-full">
            <button className="text-primary font-bold text-xl">-</button>
            <span className="font-bold text-lg">1</span>
            <button className="text-primary font-bold text-xl">+</button>
          </div>
        </div>

        <div className="border-t border-zinc-200 my-6 pt-4">
          <h2 className="font-bold text-lg mb-2">Mô tả sản phẩm</h2>
          <p className="text-zinc-600 leading-relaxed text-sm">
            Thức ăn cho mèo Royal Canin British Shorthair Adult được thiết kế đặc biệt cho các nhu cầu dinh dưỡng của mèo Anh Lông Ngắn. Công thức độc quyền giúp duy trì vóc dáng... <span className="text-primary font-semibold">Xem thêm</span>
          </p>
        </div>

        <div className="border-t border-zinc-200 pt-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="font-bold text-lg">Đánh giá (1.2k+)</h2>
            <span className="text-primary text-sm font-semibold flex items-center">Xem tất cả <Icon name="arrow_forward" className="!text-sm" /></span>
          </div>
          <div className="flex items-center gap-1 mb-4">
             {[1,2,3,4,5].map(s => <Icon key={s} name="star" className="text-yellow-400 filled !text-lg" />)}
             <span className="font-bold text-lg ml-2">4.9</span>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-zinc-100">
            <div className="flex gap-3 mb-2">
              <div className="h-10 w-10 rounded-full bg-zinc-200 bg-cover" style={{backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBNo9Ji-6hRI0-jzJn36t6Wot6w1pI3iwmdE-I8WKx_0LB2IYhBiMHhp25g2PkN82wS8BdSLhzR2RsSjmKpz1fZWEaNLUZUctDlBt0g868BwiQ-xqFINW7OOf05Z7t0ynHXEuQoDZZk2DMwbu8v2_sBj5s51CtWC9SPI9VV8k_xTvdZUXrNENUzqaXGomERNaFTjuJ5BRKirioAK_KGM-zjIi5oOVKuYoD2tHPcsFxpmUDqDuWFXzoLo7f6o3hHSxSZol7qFTxLww)'}}></div>
              <div>
                <p className="font-semibold text-sm">Ngọc Anh</p>
                <p className="text-xs text-zinc-400">2 ngày trước</p>
              </div>
            </div>
            <p className="text-sm text-zinc-600">"Sản phẩm rất tốt, mèo nhà mình rất thích ăn. Giao hàng nhanh và đóng gói cẩn thận. Sẽ tiếp tục ủng hộ shop!"</p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-zinc-100">
        <Button fullWidth icon="add_shopping_cart" onClick={() => onNavigate(ScreenName.CART)}>Thêm vào giỏ hàng</Button>
      </div>
    </div>
  );
};

export const CartScreen: React.FC<{ onNavigate: (s: ScreenName) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-background-light min-h-screen flex flex-col pb-40">
      <Header title="Giỏ hàng" leftIcon="arrow_back" onLeftClick={() => onNavigate(ScreenName.SHOP_HOME)} />
      <div className="px-4 mt-4 space-y-4">
        <h2 className="font-bold text-xl">Danh sách sản phẩm</h2>
        {[
          { name: 'Hạt khô Royal Canin', sub: '400g', price: '250.000đ', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDduJtytH7cYGWxZN0fo5um-a4nkj370zw9djOIogBH7SbbenCRNyX2MNotobE9S9p1uXBerBpAUJ9DOMr6o1kbF2dyntIgioffsPVaLgtaWneF859UUVS8YywTSmogjQzWmI4caROqBH3pStjre0T9dXG1Ha2UpLZhn3hKHQMlAbPEsKB2b4LHaj1VSKhIlr0RA2YsEryk6wKISBSPjdPRDn8NEoQTeE0k94RmD_qM-fqJxC2zX0TK4SwuEzGR61TGHADn889GPw' },
          { name: 'Dịch vụ tắm sấy', sub: 'Gói cơ bản', price: '350.000đ', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBs1CbUtEYycv1knoxObhWnCgj9M1qmvlun3QQn2iShRGEA2Ldb4DRxoze0jdPcIuhZFqy_CV-flGMh14qFoDHRIWkpR68qyVhhDFdUco5FUgZd74zFbyHqENeKB_a42NUhYQG3_0dZeE0iGvSdWFLPEggIbjE1miqj3DrtyjUZ1WnT53QUddi76FzlYTMhA9QNDZbvWR8-5xg34AQ44shuhQJtksqRcxnR3amhfRYLdQru_0uOlmeYBHiZ9Je9Zywo-qzn8JtHNQ' }
        ].map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-xl flex gap-4 shadow-sm">
            <div className="h-20 w-20 bg-cover bg-center rounded-lg shrink-0" style={{backgroundImage: `url(${item.img})`}}></div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-semibold text-sm line-clamp-1">{item.name}</h4>
                <p className="text-xs text-zinc-500">{item.sub}</p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="font-bold text-primary">{item.price}</span>
                <div className="flex items-center gap-3 border rounded-full px-2 py-0.5">
                  <button className="text-zinc-400 text-lg">-</button>
                  <span className="font-bold text-sm">1</span>
                  <button className="text-primary text-lg">+</button>
                </div>
              </div>
            </div>
            <button className="text-zinc-300 self-start"><Icon name="delete" /></button>
          </div>
        ))}
      </div>
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-zinc-200">
        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-zinc-500">Tạm tính (2 sản phẩm)</span>
            <span className="font-semibold">600.000đ</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-zinc-500">Phí giao hàng</span>
            <span className="font-semibold">25.000đ</span>
          </div>
          <div className="flex justify-between text-xl font-bold mt-2">
            <span>Tổng cộng</span>
            <span className="text-primary">625.000đ</span>
          </div>
        </div>
        <Button fullWidth icon="arrow_forward" onClick={() => onNavigate(ScreenName.ORDER_SUCCESS)}>Xác nhận đặt hàng</Button>
      </div>
    </div>
  );
};

export const OrderSuccessScreen: React.FC<{ onNavigate: (s: ScreenName) => void }> = ({ onNavigate }) => {
  return (
    <div className="h-screen flex flex-col bg-background-light">
      <Header rightIcon="close" onRightClick={() => onNavigate(ScreenName.HOME)} />
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="h-32 w-32 rounded-full bg-primary/20 flex items-center justify-center mb-6">
          <div className="h-24 w-24 rounded-full bg-primary/40 flex items-center justify-center">
            <Icon name="task_alt" className="!text-6xl text-primary" />
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-2">Đặt lịch thành công!</h2>
        <p className="text-zinc-500 mb-8">Cảm ơn bạn đã tin tưởng Miumiu. Lịch hẹn của bạn đã được xác nhận.</p>
        
        <div className="w-full bg-primary/5 border border-dashed border-primary rounded-xl p-4 mb-6">
          <p className="text-zinc-500 text-sm">Mã đặt lịch của bạn</p>
          <p className="text-2xl font-bold text-primary tracking-widest mt-1">MM110724</p>
        </div>

        <div className="w-full bg-white rounded-xl p-4 text-left shadow-sm space-y-3">
          <h3 className="font-bold text-lg mb-2">Chi tiết lịch hẹn</h3>
          <div className="flex justify-between text-sm">
            <span className="text-zinc-500">Dịch vụ</span>
            <span className="font-semibold">Tắm & Vệ sinh cho mèo</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-zinc-500">Thời gian</span>
            <span className="font-semibold">14:00, 12/07/2024</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-zinc-500">Địa chỉ</span>
            <span className="font-semibold">Chi nhánh Quận 1</span>
          </div>
          <div className="flex justify-between text-base font-bold pt-2 border-t">
            <span className="text-zinc-500">Tổng thanh toán</span>
            <span className="text-primary">625.000đ</span>
          </div>
        </div>
      </div>
      <div className="p-4 flex gap-4">
        <Button variant="outline" fullWidth onClick={() => onNavigate(ScreenName.SCHEDULE)}>Xem trạng thái</Button>
        <Button fullWidth onClick={() => onNavigate(ScreenName.HOME)}>Về trang chủ</Button>
      </div>
    </div>
  );
};

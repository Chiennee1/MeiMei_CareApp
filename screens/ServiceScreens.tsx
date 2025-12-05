
import React from 'react';
import { Button, Icon, Header } from '../components/Shared';
import { ScreenName } from '../types';

export const MapSearchScreen: React.FC<{ onNavigate: (s: ScreenName) => void }> = ({ onNavigate }) => {
  return (
    <div className="h-screen flex flex-col bg-background-light">
      <div className="p-4 bg-white/80 backdrop-blur-sm fixed top-0 w-full z-10 shadow-sm">
        <div className="flex items-center gap-3">
          <button onClick={() => onNavigate(ScreenName.HOME)} className="h-10 w-10 bg-white rounded-full shadow flex items-center justify-center"><Icon name="arrow_back" /></button>
          <div className="flex-1 h-10 bg-white rounded-full shadow flex items-center px-4 gap-2">
            <Icon name="search" className="text-zinc-400" />
            <input placeholder="Tìm kiếm địa điểm..." className="flex-1 outline-none text-sm" />
          </div>
        </div>
        <div className="flex gap-2 mt-3 overflow-x-auto no-scrollbar">
          {['Tất cả', 'Cửa hàng', 'Phòng khám', 'Công viên', 'Spa'].map((t, i) => (
            <button key={t} className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap shadow-sm ${i === 0 ? 'bg-primary text-black' : 'bg-white'}`}>
              {t}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex-1 bg-zinc-200 relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuAeQQWxiT-OygvoaX6o3uOfzMWjDPyR86U_zwf4kPajO4LCC-7GIhtfDBRb8nEcsMhzQVfzD782iLIDBGcsSj853VNTBh1M70-61ex8ipsE_k2tTO6A8FPqTbtfidTQA8SDAN-ves7iIGX96IO48wNf64KHVCZtuIfwCmxMEjxowPkMov3cZyisDvnl7_Mdrea93Lehr8klnR7rya178djQHf3qYVuF7Az0vGO9PO4Gch18BkRmMvt5q9OhVkTpfcCISbFVN0nrug)'}}></div>
        
        {/* Bottom Sheet */}
        <div className="absolute bottom-0 w-full bg-background-light rounded-t-3xl shadow-xl max-h-[45%] flex flex-col">
          <div className="w-12 h-1.5 bg-zinc-300 rounded-full mx-auto mt-3 mb-1"></div>
          <div className="p-4 pt-2 flex-1 overflow-y-auto">
            <h2 className="font-bold text-lg mb-3">3 kết quả gần bạn</h2>
            <div className="space-y-3">
              {[
                { name: 'Cửa hàng Pet Mart', addr: '123 Đường ABC, Quận 1', dist: '0.5 km', icon: 'storefront', color: 'bg-teal-100 text-teal-600' },
                { name: 'Phòng khám thú y An Bình', addr: '456 Đường XYZ, Quận 3', dist: '1.2 km', icon: 'local_hospital', color: 'bg-orange-100 text-orange-500' },
                { name: 'Công viên Tao Đàn', addr: 'Quận 1', dist: '2.5 km', icon: 'park', color: 'bg-green-100 text-green-600' },
              ].map((loc, i) => (
                <div key={i} className="bg-white p-3 rounded-xl flex items-center gap-4 shadow-sm" onClick={() => onNavigate(ScreenName.CLINIC_DETAIL)}>
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${loc.color}`}><Icon name={loc.icon} /></div>
                  <div className="flex-1">
                    <h4 className="font-bold">{loc.name}</h4>
                    <p className="text-zinc-500 text-sm">{loc.addr}</p>
                    <p className="text-zinc-400 text-xs mt-0.5">Cách đây {loc.dist}</p>
                  </div>
                  <button className="h-8 w-8 rounded-full bg-zinc-100 flex items-center justify-center"><Icon name="chevron_right" /></button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ClinicDetailScreen: React.FC<{ onNavigate: (s: ScreenName) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-background-light min-h-screen pb-24">
      <div className="relative h-64">
        <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuAjMm0RV6z34vnVnj_SsV2VxeZzPKioNpm4idOP8h3fyRwaC3AFR931VHcSdEeo76vrB6crZvCXo9-wRM89S4ZeUI6i8gJrxSWG6j-cfmqWz8pd9IuKtv7oUDhbFOVc44mVeY_caGEzZZcayRvfu7JRNTVeBlJLeP32P6DRN_JRpdLsJ5GNs1jmj48pEIff-cMqDvD7Y1wmwy0Uj4CkdlBpiSWM1mpwFnH4yxiaKBWN3-JHewDxm_6EM4UoNmxmrf6XXE0TBuubqA)'}}></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-4 left-4 right-4 flex justify-between">
          <button onClick={() => onNavigate(ScreenName.MAP_SEARCH)} className="h-10 w-10 bg-black/30 text-white rounded-full flex items-center justify-center backdrop-blur-sm"><Icon name="arrow_back" /></button>
          <div className="flex gap-2">
            <button className="h-10 w-10 bg-black/30 text-white rounded-full flex items-center justify-center backdrop-blur-sm"><Icon name="favorite_border" /></button>
            <button className="h-10 w-10 bg-black/30 text-white rounded-full flex items-center justify-center backdrop-blur-sm"><Icon name="share" /></button>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 text-white">
          <h1 className="text-2xl font-bold">MiuMiu Pet Clinic</h1>
          <div className="flex gap-1 mt-1">
            <div className="h-1.5 w-1.5 bg-white rounded-full"></div>
            <div className="h-1.5 w-1.5 bg-white/50 rounded-full"></div>
            <div className="h-1.5 w-1.5 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </div>
      
      <div className="px-4 py-6 -mt-4 bg-background-light rounded-t-3xl relative z-10 space-y-4">
        <div className="flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <div className="h-10 w-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary"><Icon name="star" /></div>
            <span className="font-semibold">4.8 (256 reviews)</span>
          </div>
          <div className="flex gap-3 items-center">
            <div className="h-10 w-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary"><Icon name="location_on" /></div>
            <span className="text-zinc-600">123 Pawsitive Avenue, Meowtown</span>
          </div>
          <div className="flex gap-3 items-center">
            <div className="h-10 w-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary"><Icon name="schedule" /></div>
            <span><span className="text-green-600 font-medium">Đang mở cửa</span> - Đóng cửa lúc 10:00 PM</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="h-12 bg-primary/20 rounded-xl text-primary font-bold flex items-center justify-center gap-2"><Icon name="call" /> Gọi điện</button>
          <button className="h-12 bg-primary/20 rounded-xl text-primary font-bold flex items-center justify-center gap-2"><Icon name="directions" /> Chỉ đường</button>
        </div>

        <div className="border-t border-zinc-200 pt-4">
          <h2 className="font-bold text-lg mb-3">Dịch vụ</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: 'Khám tổng quát', sub: 'Kiểm tra sức khỏe', price: '200.000đ' },
              { name: 'Tiêm phòng dại', sub: 'Vắc-xin phòng bệnh', price: '150.000đ' },
              { name: 'Spa & Grooming', sub: 'Tắm, cắt tỉa lông', price: '350.000đ' },
              { name: 'Nội trú', sub: 'Trông giữ thú cưng', price: '250.000đ/ngày' },
            ].map((s, i) => (
              <div key={i} className="border border-zinc-200 bg-white p-3 rounded-xl">
                <h4 className="font-bold text-sm">{s.name}</h4>
                <p className="text-xs text-zinc-500 mb-2">{s.sub}</p>
                <p className="font-bold text-primary">{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-zinc-100">
        <Button fullWidth icon="calendar_month" onClick={() => onNavigate(ScreenName.BOOK_APPOINTMENT)}>Đặt lịch hẹn</Button>
      </div>
    </div>
  );
};

export const BookAppointmentScreen: React.FC<{ onNavigate: (s: ScreenName) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-background-light min-h-screen pb-24">
      <Header title="Đặt Lịch Hẹn" leftIcon="arrow_back" onLeftClick={() => onNavigate(ScreenName.CLINIC_DETAIL)} />
      <div className="px-4 mt-2 space-y-6">
        <div>
          <h3 className="font-bold mb-3">Chọn thú cưng</h3>
          <div className="bg-white p-3 rounded-xl border border-zinc-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-cover" style={{backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuABMUquot_-kEiGa8p2v3BNJcLanhud6jTTTDRJbat4npLjnvxalZ4meuzNIMC9IK22uwXA89_oSpXxhqQrueA1rcZVw1qFyHu2CP-E1yt7-mI3Ed9-HqOyK8PSBY2_nHqA0Dy29_1R1P9jg9plEPhSjyrHNiVU6FzPr4oQbEjrdN7nk_-s8OR4MZ61NVsWIBEpg2H4KcHSrSyTBfaEOyzthtGt6qRqK3yd72qmUXrVPkJmcG9UdSZYoguaG5VK5-Kihq0E06U_fg)'}}></div>
              <div>
                <p className="font-bold">Miu Miu</p>
                <p className="text-xs text-zinc-500">Mèo Anh Lông Ngắn</p>
              </div>
            </div>
            <Icon name="expand_more" />
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-3">Chọn Dịch Vụ</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: 'health_and_safety', name: 'Khám tổng quát', active: true },
              { icon: 'vaccines', name: 'Tiêm phòng' },
              { icon: 'spa', name: 'Spa & Cắt tỉa' },
              { icon: 'support_agent', name: 'Tư vấn' }
            ].map((s, i) => (
              <div key={i} className={`p-4 rounded-xl border flex items-center gap-3 ${s.active ? 'border-primary bg-primary/10' : 'border-zinc-200 bg-white'}`}>
                <Icon name={s.icon} className={s.active ? 'text-primary' : 'text-zinc-400'} />
                <span className={`font-bold text-sm ${s.active ? 'text-black' : 'text-zinc-600'}`}>{s.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-3">Chọn Ngày & Giờ</h3>
          <div className="bg-white p-4 rounded-xl border border-zinc-200">
            <div className="flex justify-between items-center mb-4">
              <Icon name="chevron_left" className="text-zinc-400" />
              <span className="font-bold">Tháng 12, 2023</span>
              <Icon name="chevron_right" className="text-zinc-400" />
            </div>
            <div className="grid grid-cols-7 text-center text-xs gap-y-2 mb-4">
              {['T2','T3','T4','T5','T6','T7','CN'].map(d => <span key={d} className="text-zinc-400 font-medium">{d}</span>)}
              {[...Array(31)].map((_, i) => {
                 const d = i + 1;
                 const active = d === 9;
                 return <span key={i} className={`h-8 w-8 flex items-center justify-center rounded-full mx-auto ${active ? 'bg-primary text-white font-bold' : 'text-zinc-700'}`}>{d}</span>
              })}
            </div>
            <hr className="border-zinc-100 mb-4" />
            <div className="grid grid-cols-3 gap-3">
              {['09:00', '10:30', '11:00', '14:00', '15:30', '16:00'].map((t, i) => (
                <button key={t} className={`py-2 rounded-lg text-sm border ${i === 2 ? 'border-primary bg-primary/10 text-primary font-bold' : 'border-zinc-200'}`}>{t}</button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-3">Ghi Chú</h3>
          <textarea className="w-full h-24 rounded-xl border-zinc-200 p-3 text-sm focus:ring-primary focus:border-primary" placeholder="Triệu chứng hoặc yêu cầu đặc biệt..."></textarea>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-zinc-100">
        <Button fullWidth onClick={() => onNavigate(ScreenName.ORDER_SUCCESS)}>Xác Nhận Lịch Hẹn</Button>
      </div>
    </div>
  );
};

export const PetDiaryScreen: React.FC<{ onNavigate: (s: ScreenName) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-background-light min-h-screen">
      <Header title="Nhật ký của Miumiu" leftIcon="arrow_back" rightIcon="search" onLeftClick={() => onNavigate(ScreenName.HOME)} />
      
      <div className="px-4 py-2 flex items-center gap-4 mb-4">
        <div className="h-20 w-20 rounded-full bg-cover bg-center" style={{backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBqr1r3p5lEvhzia2t19Fk1Wwg1DHvY7sDZug6dGE7v7L_RV754alpGGeIj7izR_hmGnXjcirJA4oNWNb8cuhG172QabnGwebEiWud8QCcJrt1dkPCl9XBFAmyuJRwgF18I0e0nYQUgYEKFywjJ7uxOAzsna4kJPyPJMFGr05vb_gLR3oG-vh3-68y9l4a1zfUu3qjhjPhPg0O7Evjmycdlx3RRDG43S7N9nr0FUhDPsF5FyFe9WZtu4PdostUeVchADFu6QjmAEw)'}}></div>
        <div>
          <h1 className="text-xl font-bold">Miumiu</h1>
          <p className="text-zinc-500">Mèo Anh Lông Ngắn</p>
        </div>
      </div>

      <div className="px-4">
        <h3 className="text-sm font-bold text-zinc-400 uppercase mb-4 text-center">Hôm nay</h3>
        <div className="space-y-0 relative pl-4 border-l-2 border-zinc-200 ml-4">
          {[
            { icon: 'pill', title: 'Uống thuốc sổ giun', time: '08:00 SÁNG', color: 'text-primary' },
            { icon: 'pets', title: 'Đi dạo công viên', time: '09:30 SÁNG', color: 'text-primary' },
            { icon: 'restaurant', title: 'Ăn hết khẩu phần', time: '12:00 TRƯA', color: 'text-primary' },
            { icon: 'sentiment_dissatisfied', title: 'Tỏ ra mệt mỏi', time: '02:15 CHIỀU', color: 'text-primary' }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 mb-8 relative">
              <div className="absolute -left-[25px] top-0 bg-primary/20 h-8 w-8 rounded-full flex items-center justify-center border-4 border-background-light">
                <Icon name={item.icon} className={`!text-sm ${item.color}`} />
              </div>
              <div className="pl-4">
                <h4 className="font-medium text-base">{item.title}</h4>
                <p className="text-sm text-zinc-400 font-medium">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary shadow-lg flex items-center justify-center text-white">
        <Icon name="add" className="!text-3xl" />
      </button>
    </div>
  );
};

export const AddPetScreen: React.FC<{ onNavigate: (s: ScreenName) => void }> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light pb-20">
      <Header title="Thêm thú cưng" leftIcon="close" onLeftClick={() => onNavigate(ScreenName.PROFILE)} />
      
      <div className="px-4 py-6 flex flex-col items-center">
        <div className="h-28 w-28 bg-zinc-200 rounded-full flex items-center justify-center mb-6 relative border-4 border-white shadow-sm">
          <Icon name="add_a_photo" className="text-zinc-400 !text-3xl" />
          <button className="absolute bottom-0 right-0 h-8 w-8 bg-primary rounded-full flex items-center justify-center text-zinc-900 border-2 border-white">
            <Icon name="edit" className="!text-sm" />
          </button>
        </div>

        <div className="w-full space-y-4">
          <div>
            <label className="text-sm font-bold text-zinc-700 mb-1 block">Tên thú cưng</label>
            <input type="text" placeholder="Nhập tên bé..." className="w-full h-12 px-4 rounded-xl border border-zinc-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
          </div>
          
          <div>
            <label className="text-sm font-bold text-zinc-700 mb-1 block">Giống loài</label>
            <div className="flex gap-4">
               <label className="flex-1 h-12 rounded-xl border border-zinc-200 flex items-center justify-center gap-2 cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5 transition-all">
                 <input type="radio" name="type" className="hidden" />
                 <Icon name="pets" /> Chó
               </label>
               <label className="flex-1 h-12 rounded-xl border border-zinc-200 flex items-center justify-center gap-2 cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5 transition-all">
                 <input type="radio" name="type" className="hidden" />
                 <Icon name="cruelty_free" /> Mèo
               </label>
            </div>
          </div>

          <div>
            <label className="text-sm font-bold text-zinc-700 mb-1 block">Giống chi tiết</label>
            <input type="text" placeholder="VD: Corgi, Mèo Anh..." className="w-full h-12 px-4 rounded-xl border border-zinc-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-bold text-zinc-700 mb-1 block">Ngày sinh</label>
              <input type="date" className="w-full h-12 px-4 rounded-xl border border-zinc-200 focus:border-primary outline-none text-zinc-500" />
            </div>
            <div>
              <label className="text-sm font-bold text-zinc-700 mb-1 block">Cân nặng (kg)</label>
              <input type="number" placeholder="0.0" className="w-full h-12 px-4 rounded-xl border border-zinc-200 focus:border-primary outline-none" />
            </div>
          </div>

          <div>
            <label className="text-sm font-bold text-zinc-700 mb-1 block">Giới tính</label>
            <div className="flex gap-4">
               <label className="flex-1 h-12 rounded-xl border border-zinc-200 flex items-center justify-center gap-2 cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5 transition-all">
                 <input type="radio" name="gender" className="hidden" />
                 <Icon name="male" className="text-blue-500" /> Đực
               </label>
               <label className="flex-1 h-12 rounded-xl border border-zinc-200 flex items-center justify-center gap-2 cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5 transition-all">
                 <input type="radio" name="gender" className="hidden" />
                 <Icon name="female" className="text-pink-500" /> Cái
               </label>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-zinc-100">
        <Button fullWidth onClick={() => onNavigate(ScreenName.PROFILE)}>Lưu hồ sơ</Button>
      </div>
    </div>
  );
};

export const AddScheduleScreen: React.FC<{ onNavigate: (s: ScreenName) => void }> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-light pb-20">
      <Header title="Thêm lịch trình" leftIcon="close" onLeftClick={() => onNavigate(ScreenName.SCHEDULE)} />
      
      <div className="px-4 py-6 space-y-6">
        <div>
          <label className="text-sm font-bold text-zinc-700 mb-2 block">Tên hoạt động</label>
          <input type="text" placeholder="VD: Đi dạo, Tiêm phòng..." className="w-full h-12 px-4 rounded-xl border border-zinc-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
        </div>

        <div>
          <label className="text-sm font-bold text-zinc-700 mb-2 block">Loại hoạt động</label>
          <div className="flex flex-wrap gap-2">
            {['Y tế', 'Chăm sóc', 'Dinh dưỡng', 'Vui chơi', 'Khác'].map((tag, i) => (
              <button key={tag} className={`px-4 py-2 rounded-full text-sm border transition-all ${i === 0 ? 'bg-primary text-zinc-900 border-primary font-medium' : 'bg-white border-zinc-200 text-zinc-600 hover:bg-zinc-50'}`}>
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-bold text-zinc-700 mb-2 block">Ngày</label>
            <input type="date" className="w-full h-12 px-4 rounded-xl border border-zinc-200 focus:border-primary outline-none text-zinc-500" />
          </div>
          <div>
            <label className="text-sm font-bold text-zinc-700 mb-2 block">Giờ</label>
            <input type="time" className="w-full h-12 px-4 rounded-xl border border-zinc-200 focus:border-primary outline-none text-zinc-500" />
          </div>
        </div>

        <div>
          <label className="text-sm font-bold text-zinc-700 mb-2 block">Địa điểm</label>
          <div className="relative">
            <Icon name="location_on" className="absolute left-3 top-3 text-zinc-400" />
            <input type="text" placeholder="Nhập địa điểm..." className="w-full h-12 pl-10 pr-4 rounded-xl border border-zinc-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
          </div>
        </div>

        <div>
          <label className="text-sm font-bold text-zinc-700 mb-2 block">Ghi chú</label>
          <textarea className="w-full h-24 p-4 rounded-xl border border-zinc-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none" placeholder="Ghi chú thêm..."></textarea>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-zinc-100">
        <Button fullWidth onClick={() => onNavigate(ScreenName.SCHEDULE)}>Tạo lịch trình</Button>
      </div>
    </div>
  );
};

export const ChatScreen: React.FC<{ onNavigate: (s: ScreenName) => void }> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-screen bg-background-light">
      <Header title="Trò chuyện" leftIcon="arrow_back" onLeftClick={() => onNavigate(ScreenName.HOME)} rightIcon="add_comment" />
      {/* Search */}
      <div className="px-4 py-2">
        <div className="bg-white rounded-xl h-12 flex items-center px-4 gap-2 shadow-sm border border-zinc-100">
          <Icon name="search" className="text-zinc-400" />
          <input type="text" placeholder="Tìm kiếm cuộc trò chuyện..." className="bg-transparent w-full outline-none text-zinc-900" />
        </div>
      </div>
      {/* FAQ Banner */}
      <div className="px-4 mt-2 mb-4">
        <div className="bg-primary/10 p-4 rounded-xl flex items-center justify-between">
           <div className="flex items-center gap-3">
             <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-zinc-900"><Icon name="quiz" /></div>
             <div>
               <h4 className="font-bold text-sm">Câu hỏi thường gặp</h4>
               <p className="text-xs text-zinc-500">Tìm câu trả lời nhanh cho bạn</p>
             </div>
           </div>
           <Icon name="chevron_right" className="text-zinc-400" />
        </div>
      </div>
      {/* List */}
      <div className="flex-1 overflow-y-auto px-4 space-y-4 pb-20">
         {/* Item 1 */}
         <div className="flex gap-3 items-center bg-white p-3 rounded-xl shadow-sm">
            <div className="relative">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfj-Tps9XA3zb9nK8-I_AFSYINfXT3k2GPdJZynxGh9AP-lPpypSUH3_HSeDKZLA1nKMHctrIkU52mWzpauL2Eo_fVGL-JewwZqfjaEqlguJC9TwUOJkyHfydWkMNCg36bR4k1HJQPMGLargEMPYg_gAiOtK48brfJePXzDbXrVy-TeT8O2bYCgGTS9W3daK2sZGk7VFNzSejnZyV3isjYi55jLuIhFby5X0mG134OrAwem0OvgJF0zMgwEG3jlFLhccSpHKtGJw" className="h-12 w-12 rounded-full object-cover" />
              <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex-1 min-w-0">
               <div className="flex justify-between items-baseline mb-1">
                 <h4 className="font-bold text-sm truncate">Chuyên gia An Nguyễn</h4>
                 <span className="text-xs text-zinc-400 shrink-0">10:32</span>
               </div>
               <div className="flex justify-between items-center">
                 <p className="text-sm text-zinc-600 truncate font-medium">Tuyệt vời! Vậy mình hẹn bạn...</p>
                 <span className="h-5 w-5 bg-primary rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">1</span>
               </div>
            </div>
         </div>
         {/* Item 2 */}
         <div className="flex gap-3 items-center bg-white p-3 rounded-xl shadow-sm">
            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGM5cR2TCK_0tVnl67Qop9shZrKcBAHvgcPGBSbcC2lIZQGfP7VDC1CWkvPsYEBl57VvnkbC_tU9vevhrbNiexqawcKOY4C3MPUdr7jE4_4JA_1fsi0bWdkqqsRW4poyqHH36Nq7CKK_70vODg1IYi2t8StGngdBQtb3RDTMPkxwVTzmr7-TsnmHzhViLRyiHI5UcqUfixIPwc58xXzmZhQnkrh5j8IRbhBB8qLub2jcXkuS3lKNLIBQNwNifzu1WGDYSIBavi4g" className="h-12 w-12 rounded-full object-cover" />
            <div className="flex-1 min-w-0">
               <div className="flex justify-between items-baseline mb-1">
                 <h4 className="font-bold text-sm truncate">Hỗ trợ khách hàng</h4>
                 <span className="text-xs text-zinc-400 shrink-0">Hôm qua</span>
               </div>
               <p className="text-sm text-zinc-500 truncate">Bạn: Cảm ơn bạn nhiều nhé!</p>
            </div>
         </div>
         {/* Item 3 */}
         <div className="flex gap-3 items-center bg-white p-3 rounded-xl shadow-sm">
            <div className="relative">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqaNE8fqOQYFCyHPmXhRUXTbA211QwLw1fu28f_cjVyBloozp9ar3BgDS64tqJw-hT0HS9IP9X9xaasa2YNrQC4csGizoi7lJogKDiiwlwl4BQaqiFbqYjDTZabfKZ8uTAkgVQ8bSWRHSgUsZBt81OjGNTBURiemzVPaLzd7qbSGj65t5OJQXvanIgtQ8DMZOmVevYf42fiPGvMjWTSBOlx7xszRaoaDBIfAMtz9jkqZw0hNxREpw41citqNM4lOQy_Xag9N2oXQ" className="h-12 w-12 rounded-full object-cover" />
               <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex-1 min-w-0">
               <div className="flex justify-between items-baseline mb-1">
                 <h4 className="font-bold text-sm truncate">Bác sĩ Minh Trần</h4>
                 <span className="text-xs text-zinc-400 shrink-0">21/10</span>
               </div>
               <p className="text-sm text-zinc-500 truncate">Vâng, bạn cứ theo dõi và báo lại...</p>
            </div>
         </div>
         {/* Item 4 */}
         <div className="flex gap-3 items-center bg-white p-3 rounded-xl shadow-sm">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary"><Icon name="notifications" className="!text-2xl" /></div>
            <div className="flex-1 min-w-0">
               <div className="flex justify-between items-baseline mb-1">
                 <h4 className="font-bold text-sm truncate">Thông báo hệ thống</h4>
                 <span className="text-xs text-zinc-400 shrink-0">18/10</span>
               </div>
               <div className="flex justify-between items-center">
                 <p className="text-sm text-zinc-800 truncate font-semibold">Ưu đãi tháng 10 dành cho bạn!</p>
                 <div className="h-2 w-2 bg-primary rounded-full"></div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export const NotificationScreen: React.FC<{ onNavigate: (s: ScreenName) => void }> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-screen bg-background-light">
      <Header title="Thông báo" leftIcon="arrow_back" onLeftClick={() => onNavigate(ScreenName.HOME)} rightIcon="more_vert" />
      <div className="px-4 py-2">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
          {['Tất cả', 'Chưa đọc', 'Lịch hẹn', 'Sức khỏe', 'Khuyến mãi'].map((t, i) => (
            <button key={t} className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap shadow-sm ${i === 1 ? 'bg-primary text-zinc-900 font-bold' : 'bg-white text-zinc-600'}`}>
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-1">
        {[
          { icon: 'calendar_month', title: 'Nhắc nhở: Lịch chích ngừa cho Miu Miu', time: '5 phút trước', desc: 'Lịch hẹn của bạn là vào ngày mai lúc 10:00 sáng.', unread: true },
          { icon: 'chat_bubble', title: 'Bạn có tin nhắn mới', time: '30 phút trước', desc: 'Từ Bác sĩ Thú y An.', unread: true },
          { icon: 'local_offer', title: 'Khuyến mãi 50% dịch vụ Spa', time: '2 giờ trước', desc: 'Dành riêng cho khách hàng thân thiết.', unread: false },
          { icon: 'health_and_safety', title: 'Cập nhật hồ sơ sức khỏe', time: '1 ngày trước', desc: 'Bạn đã cập nhật cân nặng cho Miu Miu.', unread: false },
        ].map((item, i) => (
          <div key={i} className={`flex items-center gap-4 bg-white p-4 ${i===0 ? 'rounded-t-xl' : i===3 ? 'rounded-b-xl' : ''} ${i !== 3 ? 'border-b border-zinc-50' : ''} active:bg-zinc-50 transition-colors`}>
             <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center text-zinc-900 shrink-0">
               <Icon name={item.icon} />
             </div>
             <div className="flex-1 min-w-0">
               <h4 className={`text-sm truncate ${item.unread ? 'font-bold text-zinc-900' : 'font-medium text-zinc-700'}`}>{item.title}</h4>
               <p className={`text-xs truncate mt-0.5 ${item.unread ? 'text-zinc-600' : 'text-zinc-400'}`}>{item.desc}</p>
             </div>
             <div className="flex flex-col items-end gap-2 shrink-0">
               <span className="text-[10px] text-zinc-400">{item.time}</span>
               {item.unread && <div className="h-2.5 w-2.5 bg-red-500 rounded-full"></div>}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const AboutUsScreen: React.FC<{ onNavigate: (s: ScreenName) => void }> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-screen bg-background-light">
      <Header title="Về chúng tôi" leftIcon="arrow_back" onLeftClick={() => onNavigate(ScreenName.SETTINGS)} />
      <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col items-center text-center">
        <div className="h-24 w-24 bg-primary/20 rounded-3xl flex items-center justify-center text-primary mb-6">
          <Icon name="pets" className="!text-5xl" />
        </div>
        <h2 className="text-2xl font-bold mb-1">Miumiu Pet Care</h2>
        <p className="text-zinc-500 text-sm mb-8">Phiên bản 1.0.0</p>
        
        <p className="text-zinc-600 mb-8 leading-relaxed">
          Miumiu Pet Care là ứng dụng toàn diện giúp bạn chăm sóc thú cưng một cách tốt nhất. Từ việc theo dõi sức khỏe, đặt lịch hẹn, đến mua sắm các sản phẩm chất lượng. Chúng tôi cam kết mang đến trải nghiệm tuyệt vời cho bạn và người bạn nhỏ của mình.
        </p>

        <div className="w-full space-y-4">
          <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
            <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"><Icon name="language" /></div>
            <div className="text-left flex-1">
              <h4 className="font-bold text-sm">Website</h4>
              <p className="text-xs text-zinc-500">www.miumiupet.com</p>
            </div>
            <Icon name="open_in_new" className="text-zinc-300 !text-sm" />
          </div>
          <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
            <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600"><Icon name="mail" /></div>
            <div className="text-left flex-1">
              <h4 className="font-bold text-sm">Email hỗ trợ</h4>
              <p className="text-xs text-zinc-500">support@miumiupet.com</p>
            </div>
            <Icon name="content_copy" className="text-zinc-300 !text-sm" />
          </div>
          <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
            <div className="h-10 w-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600"><Icon name="call" /></div>
            <div className="text-left flex-1">
              <h4 className="font-bold text-sm">Hotline</h4>
              <p className="text-xs text-zinc-500">1900 1234 56</p>
            </div>
            <Icon name="call" className="text-zinc-300 !text-sm" />
          </div>
        </div>

        <div className="mt-auto pt-8 flex gap-6 justify-center">
           <button className="h-10 w-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-600"><Icon name="public" /></button>
           <button className="h-10 w-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-600"><Icon name="share" /></button>
        </div>
        <p className="text-xs text-zinc-400 mt-4">© 2024 Miumiu Inc. All rights reserved.</p>
      </div>
    </div>
  );
};

export const SettingsScreen: React.FC<{ onNavigate: (s: ScreenName) => void }> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col h-screen bg-background-light">
      <Header title="Cài đặt" leftIcon="arrow_back" onLeftClick={() => onNavigate(ScreenName.HOME)} />
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-6">
        {/* Account Section */}
        <div>
          <h3 className="text-xs font-bold text-zinc-500 uppercase mb-2 ml-1">Tài khoản</h3>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 border-b border-zinc-100 active:bg-zinc-50" onClick={() => onNavigate(ScreenName.EDIT_PROFILE)}>
              <div className="flex items-center gap-3">
                <Icon name="account_circle" className="text-zinc-500" />
                <span className="font-medium">Thông tin cá nhân</span>
              </div>
              <Icon name="chevron_right" className="text-zinc-300" />
            </button>
            <button className="w-full flex items-center justify-between p-4 active:bg-zinc-50">
              <div className="flex items-center gap-3">
                <Icon name="lock" className="text-zinc-500" />
                <span className="font-medium">Quyền riêng tư</span>
              </div>
              <Icon name="chevron_right" className="text-zinc-300" />
            </button>
          </div>
        </div>

        {/* App Section */}
        <div>
          <h3 className="text-xs font-bold text-zinc-500 uppercase mb-2 ml-1">Ứng dụng</h3>
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 border-b border-zinc-100 active:bg-zinc-50">
              <div className="flex items-center gap-3">
                <Icon name="notifications" className="text-zinc-500" />
                <span className="font-medium">Cài đặt thông báo</span>
              </div>
              <Icon name="chevron_right" className="text-zinc-300" />
            </button>
            <button className="w-full flex items-center justify-between p-4 border-b border-zinc-100 active:bg-zinc-50">
              <div className="flex items-center gap-3">
                <Icon name="language" className="text-zinc-500" />
                <span className="font-medium">Ngôn ngữ</span>
              </div>
              <Icon name="chevron_right" className="text-zinc-300" />
            </button>
            <button className="w-full flex items-center justify-between p-4 active:bg-zinc-50" onClick={() => onNavigate(ScreenName.ABOUT_US)}>
              <div className="flex items-center gap-3">
                <Icon name="info" className="text-zinc-500" />
                <span className="font-medium">Về chúng tôi</span>
              </div>
              <Icon name="chevron_right" className="text-zinc-300" />
            </button>
          </div>
        </div>

        <Button variant="ghost" className="text-red-500 hover:bg-red-50 w-full justify-center" onClick={() => onNavigate(ScreenName.WELCOME)}>
          <Icon name="logout" /> Đăng xuất
        </Button>
      </div>
    </div>
  );
};
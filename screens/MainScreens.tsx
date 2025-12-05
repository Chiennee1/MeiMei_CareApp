
import React, { useState } from 'react';
import { Button, Icon, Header } from '../components/Shared';
import { ScreenName } from '../types';

export const HomeScreen: React.FC<{ onNavigate: (s: ScreenName) => void }> = ({ onNavigate }) => {
  return (
    <div className="pb-24">
      <div className="p-4 bg-background-light sticky top-0 z-10">
        <div className="flex justify-between items-center mb-4">
          <div className="h-10 w-10 rounded-full bg-zinc-200 bg-cover bg-center" style={{backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuCVWJpSEWsJXVCm2Ulh2K-xHbbyVB7rxnGRCp-yxSzPNykZukj78aYM9Pset1xgzMuphxEovSP6SpsTOePnqmW59sQhELVVzboWA10kvZRGehx94DtrI2ud_ZsTizmnyzdbSZM-pCUcEJSGsvFbAyy1CnU2prKTf77b7-4E00xlH0mutStgRvzC2v-m8z6vmcRkduZos_Kpyz0s5Ft7STP4a-RXMf7yLeSEfpAms3O8d9SBF5AofP4RuDgxgtzjWNLx15rm5hNX4w)'}}></div>
          <div className="flex gap-2">
            <button className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-zinc-100 relative" onClick={() => onNavigate(ScreenName.NOTIFICATIONS)}>
              <Icon name="notifications" />
              <span className="absolute top-2 right-2 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-background-light"></span>
            </button>
            <button className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-zinc-100" onClick={() => onNavigate(ScreenName.CHAT_LIST)}><Icon name="chat" /></button>
            <button className="h-10 w-10 flex items-center justify-center rounded-lg hover:bg-zinc-100" onClick={() => onNavigate(ScreenName.SETTINGS)}><Icon name="settings" /></button>
          </div>
        </div>
        <h1 className="text-2xl font-bold">Chào buổi sáng, An!</h1>
      </div>

      {/* Pet Cards */}
      <div className="flex gap-4 overflow-x-auto px-4 pb-4 no-scrollbar">
        <div className="min-w-[280px] bg-white p-4 rounded-2xl shadow-sm flex items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-zinc-100 bg-cover bg-center" style={{backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBmTNhUQZCfmVYEbXPhO8PfJnsCItwhZnibECVyG8x_KL4ldLYHFV3GDAY8W6LQ00vMqPWtGF1qOyiMHmzEJEXP3C6Ym4VjUrniGS4GDPgeNNXP-wSvpNdxulAWHdR8FoqIS0j_ZmKdwFCQy9LGe6Nsd1mNN9DQApUhhUDzxs3grBKJaVVx1xdDPXC0tonvBSfJvoOfifS4kvJ98ehxm743CuNAS7cjCoFRPbEfb1x3sm-ZcQR0BZstn8IDfyGD7kpaPhV1MmMX2Q)'}}></div>
          <div>
            <h3 className="text-xl font-bold">Milo</h3>
            <p className="text-zinc-500">Golden Retriever</p>
            <p className="text-zinc-500">2 tuổi</p>
          </div>
        </div>
        <div className="min-w-[280px] bg-white p-4 rounded-2xl shadow-sm flex items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-zinc-100 bg-cover bg-center" style={{backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuABnfYlqy1rcrXv1ikLPhQGm23AvHWUX-zVke6eH69JCYoBcuBoz2MMdTuZ5yG0cI9Y59gJHSZzPKzWIpGChapCp9XtZoAiye6zXBrDlapMHm4HKhMiINeWniuZ7PzOEKg4BC4z6ey061ympgKp46u-w0GZRFCnVTR3U3iYOod0MAFs2UyleCUk0MoM-zVOsBDUc8yBCrzBvD20HxqVYOU_HfrlvVDRImfdoTXJO94ya63CIZDNjNichPUZdmG9_1rf__0-BEN8wA)'}}></div>
          <div>
            <h3 className="text-xl font-bold">Luna</h3>
            <p className="text-zinc-500">Mèo ta</p>
            <p className="text-zinc-500">1 tuổi</p>
          </div>
        </div>
      </div>

      <div className="px-4 mt-4">
        <h2 className="text-lg font-bold mb-3">Nhắc nhở sắp tới</h2>
        <div className="space-y-3">
          <div className="bg-white p-3 rounded-xl flex items-center gap-4 shadow-sm">
            <div className="h-12 w-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-500"><Icon name="vaccines" /></div>
            <div className="flex-1">
              <h4 className="font-bold">Tiêm phòng dại</h4>
              <p className="text-orange-500 text-sm">Ngày mai, 9:00 SA</p>
            </div>
            <Icon name="chevron_right" className="text-zinc-400" />
          </div>
          <div className="bg-white p-3 rounded-xl flex items-center gap-4 shadow-sm">
            <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600"><Icon name="calendar_month" /></div>
            <div className="flex-1">
              <h4 className="font-bold">Hẹn gặp bác sĩ thú y</h4>
              <p className="text-zinc-500 text-sm">25/12, 2:00 CH</p>
            </div>
            <Icon name="chevron_right" className="text-zinc-400" />
          </div>
        </div>
      </div>

      <div className="px-4 mt-6">
        <h2 className="text-lg font-bold mb-3">Truy cập nhanh</h2>
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: 'health_and_safety', label: 'Nhật ký', color: 'text-teal-500', bg: 'bg-teal-100', action: () => onNavigate(ScreenName.PET_DIARY) },
            { icon: 'event', label: 'Lịch trình', color: 'text-teal-500', bg: 'bg-teal-100', action: () => onNavigate(ScreenName.SCHEDULE) },
            { icon: 'location_on', label: 'Tìm quanh đây', color: 'text-teal-500', bg: 'bg-teal-100', action: () => onNavigate(ScreenName.MAP_SEARCH) },
            { icon: 'pets', label: 'Hồ sơ thú cưng', color: 'text-teal-500', bg: 'bg-teal-100', action: () => onNavigate(ScreenName.EDIT_PROFILE) },
            { icon: 'storefront', label: 'Cửa hàng', color: 'text-teal-500', bg: 'bg-teal-100', action: () => onNavigate(ScreenName.SHOP_HOME) },
          ].map((item, idx) => (
            <button key={idx} onClick={item.action} className="bg-white p-4 rounded-xl flex flex-col items-center gap-2 shadow-sm active:scale-95 transition-transform">
              <div className={`h-12 w-12 rounded-full ${item.bg} flex items-center justify-center ${item.color}`}>
                <Icon name={item.icon} className="!text-3xl" />
              </div>
              <span className="text-sm font-medium text-center">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ScheduleScreen: React.FC<{ onNavigate: (s: ScreenName) => void }> = ({ onNavigate }) => {
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar');

  const events = [
    { title: 'Khám sức khỏe định kỳ', time: '09:00', date: '12/12', loc: 'Bệnh viện thú y PetCare', icon: 'medical_services', color: 'text-blue-500', bg: 'bg-blue-100' },
    { title: 'Uống thuốc bổ sung Canxi', time: '12:30', date: '12/12', loc: 'Tại nhà', icon: 'pill', color: 'text-purple-500', bg: 'bg-purple-100' },
    { title: 'Cắt tỉa lông', time: '15:00', date: '12/12', loc: 'MiuMiu Grooming', icon: 'styler', color: 'text-green-500', bg: 'bg-green-100' },
    { title: 'Tiêm phòng dại', time: '09:00', date: '13/12', loc: 'Trạm thú y Quận 1', icon: 'vaccines', color: 'text-orange-500', bg: 'bg-orange-100' },
    { title: 'Đi dạo công viên', time: '17:00', date: '13/12', loc: 'Công viên Tao Đàn', icon: 'pets', color: 'text-teal-500', bg: 'bg-teal-100' },
  ];

  return (
    <div className="pb-24 flex flex-col h-screen">
      <Header title="Lịch trình" leftIcon="arrow_back" rightIcon="pets" onLeftClick={() => onNavigate(ScreenName.HOME)} />
      <div className="px-4 py-2">
        <div className="flex bg-zinc-200 rounded-lg p-1">
          <button 
            className={`flex-1 py-1.5 rounded-md text-sm font-medium transition-all ${viewMode === 'calendar' ? 'bg-white shadow-sm text-zinc-900' : 'text-zinc-500'}`}
            onClick={() => setViewMode('calendar')}
          >
            Lịch
          </button>
          <button 
            className={`flex-1 py-1.5 rounded-md text-sm font-medium transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-zinc-900' : 'text-zinc-500'}`}
            onClick={() => setViewMode('list')}
          >
            Danh sách
          </button>
        </div>
      </div>
      
      {viewMode === 'calendar' ? (
        <>
          {/* Calendar View */}
          <div className="px-4 mt-2">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-lg">Tháng 12 2024</span>
              <div className="flex gap-2">
                 <button className="h-8 w-8 flex items-center justify-center bg-zinc-200 rounded-full"><Icon name="chevron_left" className="!text-lg" /></button>
                 <button className="h-8 w-8 flex items-center justify-center bg-zinc-200 rounded-full"><Icon name="chevron_right" className="!text-lg" /></button>
              </div>
            </div>
            <div className="grid grid-cols-7 text-center text-xs mb-2 text-zinc-500 font-bold">
              {['CN','T2','T3','T4','T5','T6','T7'].map(d => <div key={d}>{d}</div>)}
            </div>
            <div className="grid grid-cols-7 text-center text-sm gap-y-3">
              {[...Array(31)].map((_, i) => {
                const day = i + 1;
                const isToday = day === 12;
                const hasEvent = [4, 12, 13, 16, 25].includes(day);
                return (
                  <div key={i} className="relative flex justify-center">
                    <span className={`h-8 w-8 flex items-center justify-center rounded-full transition-colors ${isToday ? 'bg-primary text-white font-bold shadow-md' : 'text-zinc-700'}`}>
                      {day}
                    </span>
                    {hasEvent && !isToday && <div className="absolute bottom-[-4px] h-1.5 w-1.5 rounded-full bg-soft-teal"></div>}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 mt-6">
            <h3 className="font-bold text-lg mb-3">Thứ Năm, 12 Tháng 12</h3>
            <div className="space-y-3">
              {events.slice(0, 3).map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-xl flex items-center gap-4 shadow-sm border border-zinc-100">
                  <div className={`h-12 w-12 rounded-full ${item.bg} flex items-center justify-center ${item.color}`}>
                    <Icon name={item.icon} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-zinc-500 text-sm">{item.time} - {item.loc}</p>
                  </div>
                  <Icon name="more_vert" className="text-zinc-400" />
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="flex-1 overflow-y-auto px-4 mt-2">
          {/* List View */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-zinc-500 text-sm uppercase mb-3">Hôm nay, 12/12</h3>
              <div className="space-y-3">
                {events.slice(0, 3).map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl flex items-center gap-4 shadow-sm border border-zinc-100">
                    <div className={`flex flex-col items-center justify-center w-12 shrink-0`}>
                      <span className="text-xs font-bold text-zinc-400">{item.time}</span>
                      <div className={`h-8 w-0.5 ${item.bg.replace('bg-', 'bg-opacity-50 bg-')} mt-1`}></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-zinc-500 text-sm">{item.loc}</p>
                    </div>
                    <div className={`h-10 w-10 rounded-full ${item.bg} flex items-center justify-center ${item.color}`}>
                      <Icon name={item.icon} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-zinc-500 text-sm uppercase mb-3">Ngày mai, 13/12</h3>
              <div className="space-y-3">
                {events.slice(3).map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl flex items-center gap-4 shadow-sm border border-zinc-100">
                    <div className={`flex flex-col items-center justify-center w-12 shrink-0`}>
                      <span className="text-xs font-bold text-zinc-400">{item.time}</span>
                      <div className={`h-8 w-0.5 ${item.bg.replace('bg-', 'bg-opacity-50 bg-')} mt-1`}></div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-zinc-500 text-sm">{item.loc}</p>
                    </div>
                    <div className={`h-10 w-10 rounded-full ${item.bg} flex items-center justify-center ${item.color}`}>
                      <Icon name={item.icon} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="absolute bottom-24 right-4">
        <button 
          onClick={() => onNavigate(ScreenName.ADD_SCHEDULE)}
          className="h-14 w-14 bg-primary rounded-full shadow-lg flex items-center justify-center text-zinc-900 active:scale-90 transition-transform hover:bg-primary/90"
        >
          <Icon name="add" className="!text-3xl" />
        </button>
      </div>
    </div>
  );
};

export const HealthScreen: React.FC = () => {
  return (
    <div className="pb-24 h-screen flex flex-col">
      <Header title="Sức khỏe" leftIcon="arrow_back" />
      <div className="px-4 py-2">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          {['Tất cả', 'Sức khỏe', 'Lịch hẹn', 'Hoạt động'].map((t, i) => (
            <button key={t} className={`px-4 py-1.5 rounded-lg text-sm whitespace-nowrap ${i === 1 ? 'bg-white shadow-sm font-bold text-zinc-900' : 'text-zinc-500'}`}>
              {t}
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-4">
        <h3 className="font-bold text-lg mt-2 mb-3">Hôm nay</h3>
        <div className="space-y-3">
           <div className="bg-white p-4 rounded-xl flex gap-4 shadow-sm relative">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0"><Icon name="pill" /></div>
              <div className="flex-1 pr-12">
                <h4 className="font-bold truncate">Nhắc nhở uống thuốc</h4>
                <p className="text-zinc-500 text-sm line-clamp-2">Đã đến giờ uống thuốc bổ sung canxi cho bé Vàng.</p>
              </div>
              <div className="absolute right-4 top-4 flex flex-col items-end">
                <div className="h-2.5 w-2.5 bg-green-500 rounded-full mb-1"></div>
                <span className="text-xs text-zinc-400">5 phút</span>
              </div>
           </div>
           <div className="bg-white p-4 rounded-xl flex gap-4 shadow-sm relative">
              <div className="h-12 w-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 shrink-0"><Icon name="event_upcoming" /></div>
              <div className="flex-1 pr-12">
                <h4 className="font-bold truncate">Lịch hẹn sắp tới</h4>
                <p className="text-zinc-500 text-sm line-clamp-2">Bạn có lịch tái khám cho bé Miu vào 15:00 hôm nay.</p>
              </div>
              <div className="absolute right-4 top-4 flex flex-col items-end">
                <div className="h-2.5 w-2.5 bg-green-500 rounded-full mb-1"></div>
                <span className="text-xs text-zinc-400">1 giờ</span>
              </div>
           </div>
        </div>

        <h3 className="font-bold text-lg mt-6 mb-3">Tuần này</h3>
        <div className="space-y-3 opacity-70">
           <div className="bg-white p-4 rounded-xl flex gap-4 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 shrink-0"><Icon name="science" /></div>
              <div>
                <h4 className="font-bold">Kết quả khám bệnh mới</h4>
                <p className="text-zinc-500 text-sm">Đã có kết quả xét nghiệm máu của bé Miu.</p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export const ProfileScreen: React.FC<{ onNavigate: (s: ScreenName) => void }> = ({ onNavigate }) => {
  return (
    <div className="pb-24">
      <div className="p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Hồ sơ</h1>
        <button onClick={() => onNavigate(ScreenName.SETTINGS)}><Icon name="settings" /></button>
      </div>
      <div className="flex flex-col items-center mb-6">
        <div className="relative">
          <div className="h-28 w-28 rounded-full bg-zinc-200 bg-cover bg-center mb-2" style={{backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuCVWJpSEWsJXVCm2Ulh2K-xHbbyVB7rxnGRCp-yxSzPNykZukj78aYM9Pset1xgzMuphxEovSP6SpsTOePnqmW59sQhELVVzboWA10kvZRGehx94DtrI2ud_ZsTizmnyzdbSZM-pCUcEJSGsvFbAyy1CnU2prKTf77b7-4E00xlH0mutStgRvzC2v-m8z6vmcRkduZos_Kpyz0s5Ft7STP4a-RXMf7yLeSEfpAms3O8d9SBF5AofP4RuDgxgtzjWNLx15rm5hNX4w)'}}></div>
          <button onClick={() => onNavigate(ScreenName.EDIT_PROFILE)} className="absolute bottom-2 right-0 bg-primary h-8 w-8 rounded-full border-2 border-white flex items-center justify-center text-zinc-900"><Icon name="edit" className="!text-sm" /></button>
        </div>
        <h2 className="text-xl font-bold">Lê Minh An</h2>
        <p className="text-zinc-500">an.le@email.com</p>
      </div>

      <div className="px-4 space-y-3">
        {[
          { icon: 'account_circle', label: 'Chỉnh sửa thông tin', action: () => onNavigate(ScreenName.EDIT_PROFILE) },
          { icon: 'lock', label: 'Đổi mật khẩu' },
          { icon: 'privacy_tip', label: 'Cài đặt quyền riêng tư' }
        ].map((item, i) => (
          <button key={i} onClick={item.action} className="w-full bg-white p-4 rounded-xl flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-4">
              <Icon name={item.icon} className="text-zinc-500" />
              <span className="font-medium">{item.label}</span>
            </div>
            <Icon name="chevron_right" className="text-zinc-400" />
          </button>
        ))}
      </div>

      <div className="px-4 mt-6">
        <h3 className="font-bold text-lg mb-3">Thú cưng của bạn</h3>
        <div className="space-y-3">
          <div className="bg-white p-3 rounded-xl flex items-center gap-4 shadow-sm" onClick={() => onNavigate(ScreenName.PET_DIARY)}>
             <div className="h-14 w-14 rounded-full bg-zinc-200 bg-cover bg-center" style={{backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuBmTNhUQZCfmVYEbXPhO8PfJnsCItwhZnibECVyG8x_KL4ldLYHFV3GDAY8W6LQ00vMqPWtGF1qOyiMHmzEJEXP3C6Ym4VjUrniGS4GDPgeNNXP-wSvpNdxulAWHdR8FoqIS0j_ZmKdwFCQy9LGe6Nsd1mNN9DQApUhhUDzxs3grBKJaVVx1xdDPXC0tonvBSfJvoOfifS4kvJ98ehxm743CuNAS7cjCoFRPbEfb1x3sm-ZcQR0BZstn8IDfyGD7kpaPhV1MmMX2Q)'}}></div>
             <div className="flex-1">
               <h4 className="font-bold text-lg">Milo</h4>
               <p className="text-zinc-500">Golden Retriever</p>
             </div>
             <Icon name="chevron_right" className="text-zinc-400" />
          </div>
          <div className="bg-white p-3 rounded-xl flex items-center gap-4 shadow-sm" onClick={() => onNavigate(ScreenName.PET_DIARY)}>
             <div className="h-14 w-14 rounded-full bg-zinc-200 bg-cover bg-center" style={{backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuABnfYlqy1rcrXv1ikLPhQGm23AvHWUX-zVke6eH69JCYoBcuBoz2MMdTuZ5yG0cI9Y59gJHSZzPKzWIpGChapCp9XtZoAiye6zXBrDlapMHm4HKhMiINeWniuZ7PzOEKg4BC4z6ey061ympgKp46u-w0GZRFCnVTR3U3iYOod0MAFs2UyleCUk0MoM-zVOsBDUc8yBCrzBvD20HxqVYOU_HfrlvVDRImfdoTXJO94ya63CIZDNjNichPUZdmG9_1rf__0-BEN8wA)'}}></div>
             <div className="flex-1">
               <h4 className="font-bold text-lg">Luna</h4>
               <p className="text-zinc-500">Mèo ta</p>
             </div>
             <Icon name="chevron_right" className="text-zinc-400" />
          </div>
          <button 
            onClick={() => onNavigate(ScreenName.ADD_PET)}
            className="w-full py-3 border-2 border-dashed border-zinc-300 rounded-xl text-zinc-500 font-medium flex items-center justify-center gap-2 hover:bg-zinc-50 transition-colors"
          >
            <Icon name="add" /> Thêm thú cưng
          </button>
        </div>
      </div>
    </div>
  );
};
import React, { useState } from 'react';
import { Button, Icon, Header } from '../components/Shared';
import { ScreenName } from '../types';

export const WelcomeScreen: React.FC<{ onNavigate: (s: ScreenName) => void }> = ({ onNavigate }) => {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <div className="flex flex-col items-center pt-12 pb-6 px-4">
        <Icon name="pets" className="!text-5xl text-zinc-900 mb-2" />
        <h1 className="font-bold text-2xl tracking-tighter">Miumiu</h1>
      </div>
      <div className="w-full px-4 mb-6">
        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100">
           <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfninO4ECYvQw61ba7NSC5JoppcoWyfDLRr95L2MVOvTtFBiGOya9iMz9ka0kXCjMm6g6Pc4LfpFupmhgroUTzKjLm7Mw4AVsuUtLhrsSIFJ1IFgZfoN07Py9wmhbm_nyn5VL9KdAIvupWJ15armDnbu1Smadwbu6fU-t1VJBiwkRybOY4yDPzyO_4R4ZEBOX4Zneid_TDMi1qVLSNNHKX_LH0v0TPMHTHmPb4Xws9q9WxeWMP1nCFcwMLbxWVogWOTGCtSZ_5-g" className="w-full h-full object-cover" alt="Pets" />
        </div>
      </div>
      <div className="px-4 text-center mt-2">
        <h1 className="text-3xl font-bold leading-tight mb-2">Chăm sóc bé cưng, ngay trong tầm tay.</h1>
        <p className="text-zinc-500">Nơi chăm sóc tốt nhất cho thú cưng của bạn, kết nối cộng đồng yêu động vật.</p>
      </div>
      <div className="mt-auto p-4 flex flex-col gap-3">
        <Button onClick={() => onNavigate(ScreenName.REGISTER)}>Tạo tài khoản mới</Button>
        <Button variant="secondary" onClick={() => onNavigate(ScreenName.LOGIN)}>Đăng nhập</Button>
        <div className="relative flex items-center justify-center py-4">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-zinc-200"></div></div>
          <span className="relative bg-background-light px-2 text-sm text-zinc-500">Hoặc tiếp tục với</span>
        </div>
        <div className="flex justify-center gap-4">
           {['facebook', 'google', 'apple'].map(i => (
             <button key={i} className="h-12 w-12 rounded-full border border-zinc-200 flex items-center justify-center bg-white">
                <img src={`https://lh3.googleusercontent.com/aida-public/AB6AXuDHoGCpIEb7egtyl6fa79xi4_muXBjWkB_Zg1UmfACfyqYmfgHy-Z44sZhi2BVU8tS1olWYubTf_TNTeZu3FCyZjaRHqky5D7UhJy80FiXHTEAX2A1qkmFmvvzppm0QhKjMyGslweo9RHVwWXpfl_PPeDZl8jDj1bz39L5YR1kacjJR8wWcnwmlAyOipFX93P9v4FVFvRq0NbVo9YmE9oW5O7VT411Ui3QAv7KJzJbf7IRtHx9Ud55vFrYyMhdZDubIahMBOMlJWg`} className="w-6 h-6 object-contain" style={{opacity: i === 'facebook' ? 1 : 0.6}} alt={i}/>
             </button>
           ))}
        </div>
      </div>
    </div>
  );
};

export const LoginScreen: React.FC<{ onNavigate: (s: ScreenName) => void }> = ({ onNavigate }) => {
  return (
    <div className="flex min-h-screen flex-col bg-background-light">
      <Header onLeftClick={() => onNavigate(ScreenName.WELCOME)} />
      <div className="flex-1 px-6 py-8">
        <h1 className="text-3xl font-bold mb-2">Chào mừng trở lại!</h1>
        <p className="text-zinc-500 mb-8">Đăng nhập để tiếp tục chăm sóc bé cưng.</p>
        
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium mb-1 block">Email</label>
            <input type="email" placeholder="email@example.com" className="w-full h-12 rounded-xl border-none bg-white px-4 focus:ring-2 focus:ring-primary/50 outline-none" />
          </div>
          <div>
            <label className="text-sm font-medium mb-1 block">Mật khẩu</label>
            <div className="relative">
              <input type="password" placeholder="••••••••" className="w-full h-12 rounded-xl border-none bg-white px-4 focus:ring-2 focus:ring-primary/50 outline-none" />
              <button className="absolute right-4 top-3 text-zinc-400"><Icon name="visibility_off" /></button>
            </div>
          </div>
          <div className="flex justify-end">
            <button onClick={() => onNavigate(ScreenName.FORGOT_PASSWORD)} className="text-sm font-bold text-primary">Quên mật khẩu?</button>
          </div>
        </div>

        <Button className="mt-8" fullWidth onClick={() => onNavigate(ScreenName.HOME)}>Đăng nhập</Button>
      </div>
    </div>
  );
};

export const OnboardingScreen: React.FC<{ onNavigate: (s: ScreenName) => void }> = ({ onNavigate }) => {
  const [step, setStep] = useState(0);
  const steps = [
    {
      title: "Mua sắm & Dịch vụ tiện lợi",
      desc: "Tìm kiếm sản phẩm, đặt lịch spa hay khám bệnh cho thú cưng ngay trên Miumiu.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiqadiT6lEXotig-6REzaBbdGIFrpaehq5CF_Z0eCJmXN8iHhmBoJR8LYvO9GRN2xRGhVbfqv7R5z1atrxiYGIQy33jDbXKIkKj4atGq-TDDEqo6VrR4eb6xX0vche68HD14jtCJYxynBF4YOuYGRKYBtn28cOgOqvoYXb8BxfE3YRu8P1bjQJPG_jHZsToViQunfTvGw5wIEfg0pHG8ILWXxQJNXr4bFaRxcapwG6lYobpWj7jQbMnj-6ETALo9F12eOuI8w80Q"
    },
    {
      title: "Quản lý hồ sơ thú cưng",
      desc: "Tạo và quản lý hồ sơ sức khỏe cho thú cưng của bạn một cách dễ dàng.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcVqe8aEgKHvt8bf7id_jJ-yVjW81g6NeLEc7DcMF5iPvBJK8ZE16cV9qRuvC_YyII27-ozdUzZK3bfLt_ptk6yql_4Urg1lGBrighf56ULWJ1vLA69SMYFAJEv9eARPr4WucsKz06L-SVsm8mbGP1Eb29-BFpmBnjb_0w2GHpNc2_oS3CqkY7ynkTMQ5BCQ3AIdIZdfUOUP_z2esbmiYBj2UBi8ezFrbNxbLT862bFTHean6Z09KhEeDfW7xUbHgvfnONIhaXoQ"
    },
    {
      title: "Theo dõi sức khỏe toàn diện",
      desc: "Ghi lại các chỉ số quan trọng và theo dõi sát sao tình hình sức khỏe của bé cưng.",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAKJn_HAZSvUIYl-WQpiiptKrYTaH2kpmuS3TSiAjw8ZJenJhnQJfCnogfF_D_AjvdX_ogwYrh53zC3nzt6Du-jorqQS3zaG879ogXlJlKNhpVvxoNweGg5C1wwa2gRYqNF8OkZ45cHMjtTdAHU6sr4xyrKVNo9jeb9J6yLYonCnvMVIFzBeBpq8OplH4XhE-62al6UqJORNYHmach7701hi01DhHxSB5MxZNe_o6YquRrhxQbEvnDize9Opjtc065MErSaCfMXgg"
    }
  ];

  const handleNext = () => {
    if (step < steps.length - 1) setStep(step + 1);
    else onNavigate(ScreenName.WELCOME);
  };

  return (
    <div className="flex h-screen flex-col bg-background-light">
      <div className="flex justify-end p-4">
        <button onClick={() => onNavigate(ScreenName.WELCOME)} className="text-zinc-500 font-bold">Bỏ qua</button>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="w-full aspect-square mb-8 rounded-2xl overflow-hidden bg-white shadow-sm">
           <div className="w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${steps[step].img})`}}></div>
        </div>
        <h2 className="text-2xl font-bold mb-3">{steps[step].title}</h2>
        <p className="text-zinc-500">{steps[step].desc}</p>
      </div>
      <div className="p-6">
        <div className="flex justify-center gap-2 mb-6">
          {steps.map((_, i) => (
            <div key={i} className={`h-2 w-2 rounded-full ${i === step ? 'bg-primary w-4' : 'bg-zinc-300'}`} />
          ))}
        </div>
        <Button fullWidth onClick={handleNext}>{step === steps.length - 1 ? 'Bắt đầu' : 'Tiếp theo'}</Button>
      </div>
    </div>
  );
};

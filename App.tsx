
import React, { useState } from 'react';
import { WelcomeScreen, LoginScreen, OnboardingScreen } from './screens/AuthScreens';
import { HomeScreen, ScheduleScreen, HealthScreen, ProfileScreen } from './screens/MainScreens';
import { ShopHomeScreen, ProductDetailScreen, CartScreen, OrderSuccessScreen } from './screens/ShopScreens';
import { MapSearchScreen, ClinicDetailScreen, BookAppointmentScreen, PetDiaryScreen, AddPetScreen, AddScheduleScreen, ChatScreen, SettingsScreen, NotificationScreen, AboutUsScreen } from './screens/ServiceScreens';
import { BottomNav } from './components/Shared';
import { ScreenName } from './types';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>(ScreenName.ONBOARDING);
  const [activeTab, setActiveTab] = useState<string>(ScreenName.HOME);

  const navigate = (screen: ScreenName) => {
    setCurrentScreen(screen);
    // Sync tab state if navigating to main tabs
    if ([ScreenName.HOME, ScreenName.SCHEDULE, ScreenName.HEALTH, ScreenName.PROFILE].includes(screen)) {
      setActiveTab(screen);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      // Auth
      case ScreenName.ONBOARDING: return <OnboardingScreen onNavigate={navigate} />;
      case ScreenName.WELCOME: return <WelcomeScreen onNavigate={navigate} />;
      case ScreenName.LOGIN: return <LoginScreen onNavigate={navigate} />;
      case ScreenName.REGISTER: return <LoginScreen onNavigate={navigate} />; // Mock register uses login screen UI for now
      case ScreenName.FORGOT_PASSWORD: return <LoginScreen onNavigate={navigate} />; // Mock

      // Main Tabs
      case ScreenName.HOME: return <HomeScreen onNavigate={navigate} />;
      case ScreenName.SCHEDULE: return <ScheduleScreen onNavigate={navigate} />;
      case ScreenName.HEALTH: return <HealthScreen />;
      case ScreenName.PROFILE: return <ProfileScreen onNavigate={navigate} />;

      // Shop
      case ScreenName.SHOP_HOME: return <ShopHomeScreen onNavigate={navigate} />;
      case ScreenName.PRODUCT_DETAIL: return <ProductDetailScreen onNavigate={navigate} />;
      case ScreenName.CART: return <CartScreen onNavigate={navigate} />;
      case ScreenName.ORDER_SUCCESS: return <OrderSuccessScreen onNavigate={navigate} />;

      // Features
      case ScreenName.MAP_SEARCH: return <MapSearchScreen onNavigate={navigate} />;
      case ScreenName.CLINIC_DETAIL: return <ClinicDetailScreen onNavigate={navigate} />;
      case ScreenName.BOOK_APPOINTMENT: return <BookAppointmentScreen onNavigate={navigate} />;
      case ScreenName.PET_DIARY: return <PetDiaryScreen onNavigate={navigate} />;
      case ScreenName.ADD_PET: return <AddPetScreen onNavigate={navigate} />;
      case ScreenName.ADD_SCHEDULE: return <AddScheduleScreen onNavigate={navigate} />;
      
      // New Features
      case ScreenName.CHAT_LIST: return <ChatScreen onNavigate={navigate} />;
      case ScreenName.SETTINGS: return <SettingsScreen onNavigate={navigate} />;
      case ScreenName.NOTIFICATIONS: return <NotificationScreen onNavigate={navigate} />;
      case ScreenName.ABOUT_US: return <AboutUsScreen onNavigate={navigate} />;

      // Fallbacks for mocks
      case ScreenName.EDIT_PROFILE: return <ProfileScreen onNavigate={navigate} />; 

      default: return <HomeScreen onNavigate={navigate} />;
    }
  };

  const showBottomNav = [
    ScreenName.HOME, 
    ScreenName.SCHEDULE, 
    ScreenName.HEALTH, 
    ScreenName.PROFILE
  ].includes(currentScreen);

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl overflow-hidden relative">
      {renderScreen()}
      {showBottomNav && (
        <BottomNav activeTab={activeTab} onTabChange={(tab) => navigate(tab)} />
      )}
    </div>
  );
};

export default App;
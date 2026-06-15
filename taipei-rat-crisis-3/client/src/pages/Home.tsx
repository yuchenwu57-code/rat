/**
 * 安鼠之亂｜台北鼠患深度調查
 * 設計哲學：調查報導暗室美學
 * 深夜城市的緊張感，深黑底色配警示橘紅強調色
 * 以記者視角呈現台北市鼠患事件始末
 */
import Navbar from '@/components/Navbar';
import ReporterIntro from '@/components/ReporterIntro';
import HeroSection from '@/components/HeroSection';
import SparkSection from '@/components/SparkSection';
import TimelineSection from '@/components/TimelineSection';
import WhySection from '@/components/WhySection';
import DataDashboard from '@/components/DataDashboard';
import FalconSection from '@/components/FalconSection';
import EcologySection from '@/components/EcologySection';
import QuizSection from '@/components/QuizSection';
import SolutionsSection from '@/components/SolutionsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#0D0D0D',
        color: '#F0EDE8',
      }}
    >
      <Navbar />
      <HeroSection />
      <ReporterIntro />
      <SparkSection />
      <TimelineSection />
      <DataDashboard />
      <WhySection />
      <FalconSection />
      <EcologySection />
      <QuizSection />
      <SolutionsSection />
      <Footer />
    </div>
  );
}

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { FadeIn } from './animation/FadeIn';

const dataset1 = [
  { month: 'Apr', traffic: 15,   impressions: 714,    ctr: 2.10 },
  { month: 'May', traffic: 1146, impressions: 39778,  ctr: 2.88 },
  { month: 'Jun', traffic: 2385, impressions: 75745,  ctr: 3.15 },
  { month: 'Jul', traffic: 1737, impressions: 64118,  ctr: 2.71 },
  { month: 'Aug', traffic: 1851, impressions: 56249,  ctr: 3.29 },
  { month: 'Sep', traffic: 2004, impressions: 58616,  ctr: 3.42 },
  { month: 'Oct', traffic: 3291, impressions: 118229, ctr: 2.78 }
];

const dataset2 = [
  { month: 'Aug', traffic: 309, impressions: 12694, ctr: 2.43 },
  { month: 'Sep', traffic: 668, impressions: 27114, ctr: 2.46 },
  { month: 'Oct', traffic: 251, impressions: 8988,  ctr: 2.79 },
  { month: 'Nov', traffic: 655, impressions: 28299, ctr: 2.31 },
  { month: 'Dec', traffic: 492, impressions: 25964, ctr: 1.89 },
  { month: 'Jan', traffic: 653, impressions: 25747, ctr: 2.54 },
  { month: 'Feb', traffic: 551, impressions: 26712, ctr: 2.06 },
  { month: 'Mar', traffic: 587, impressions: 28677, ctr: 2.05 }
];

const MetricExplanation = ({ title, description }: { title: string; description: string }) => (
  <div className="mb-6">
    <h4 className="text-lg font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#E53CC1] to-[#FF9EE3]">
      {title}
    </h4>
    <p className="text-gray-300">{description}</p>
  </div>
);

const TrafficChart = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-form');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const renderChart = (data: typeof dataset1, title: string) => (
    <div className="h-[400px]">
      <h3 className="text-xl font-semibold mb-6">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#1F2937" />
          <XAxis
            dataKey="month"
            stroke="#9CA3AF"
            tick={{ fill: '#9CA3AF' }}
          />
          <YAxis
            yAxisId="left"
            stroke="#9CA3AF"
            tick={{ fill: '#9CA3AF' }}
            domain={[0, 'auto']}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#9CA3AF"
            tick={{ fill: '#9CA3AF' }}
            domain={[0, 5]}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#0C0C16',
              border: '1px solid #374151',
              borderRadius: '0.5rem',
            }}
            labelStyle={{ color: '#fff' }}
            formatter={(value, name) => {
              if (name === "CTR") return [`${value}%`, name];
              return [value.toLocaleString(), name];
            }}
          />
          <Legend />
          <Area
            yAxisId="left"
            type="monotone"
            dataKey="traffic"
            name="Traffic"
            stroke="#E53CC1"
            fill="url(#trafficGradient)"
            strokeWidth={2}
          />
          <Area
            yAxisId="left"
            type="monotone"
            dataKey="impressions"
            name="Impressions"
            stroke="#FF9EE3"
            fill="url(#impressionsGradient)"
            strokeWidth={2}
          />
          <Area
            yAxisId="right"
            type="monotone"
            dataKey="ctr"
            name="CTR"
            stroke="#D054B1"
            fill="url(#ctrGradient)"
            strokeWidth={2}
          />
          <defs>
            <linearGradient id="trafficGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#E53CC1" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#E53CC1" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="impressionsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FF9EE3" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#FF9EE3" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="ctrGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#D054B1" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#D054B1" stopOpacity={0}/>
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );

  return (
    <FadeIn>
      <div className="bg-[#0C0C16]/70 backdrop-blur-sm border border-gray-800 rounded-xl p-6 mt-12">
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              <div className="flex-[0_0_100%] min-w-0">
                {renderChart(dataset1, "Metrics Evolution - Main Site")}
              </div>
              <div className="flex-[0_0_100%] min-w-0">
                {renderChart(dataset2, "Metrics Evolution - Secondary Site")}
              </div>
            </div>
          </div>
          
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 flex items-center justify-center bg-[#0C0C16] border border-gray-800 rounded-full hover:bg-[#121026] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 flex items-center justify-center bg-[#0C0C16] border border-gray-800 rounded-full hover:bg-[#121026] transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8">
          <h3 className="text-xl font-semibold mb-6">Understanding the Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <MetricExplanation
              title="Traffic"
              description="In the context of SEO and Google, 'traffic' represents the number of times users click on your search results to access your site. It's a direct measure of how effective your pages are at attracting visitors from organic (non-paid) listings."
            />
            <MetricExplanation
              title="Impressions"
              description="An 'impression' occurs each time your page appears in Google search results for a user query, whether they click on it or not. Impressions show how often your site is visible and help evaluate your content's reach."
            />
            <MetricExplanation
              title="CTR (Click-Through Rate)"
              description="CTR is the percentage of impressions that generate clicks. It's calculated as (Clicks ÷ Impressions) × 100. In SEO, a higher CTR means your title tags and meta descriptions are compelling and relevant enough to encourage users to visit your site."
            />
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-300 mb-6">
              Want to know your growth potential? Get a free analysis of your website.
            </p>
            <button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#E53CC1] to-[#FF9EE3] text-black font-semibold rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              Analyze my site for free
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default TrafficChart;
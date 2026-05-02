import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight, Share2, CheckCircle, Link2, Mail, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Reusable premium typography components for consistent styling
const H2 = ({ children }) => (
  <h2 className="text-3xl md:text-4xl font-black text-charcoal mt-20 mb-10 tracking-tight flex flex-col gap-4">
    <span className="w-16 h-1.5 bg-rose-gold rounded-full"></span>
    {children}
  </h2>
);

const H3 = ({ children }) => (
  <h3 className="text-2xl font-bold text-rose-gold mt-12 mb-6 flex items-center gap-4">
    {children}
  </h3>
);

const P = ({ children, className = "" }) => (
  <p className={`text-[1.125rem] md:text-[1.2rem] text-charcoal/75 leading-[1.9] font-medium mb-8 ${className}`}>
    {children}
  </p>
);

const FeatureImg = ({ src, alt }) => (
  <div className="my-10 rounded-3xl overflow-hidden shadow-lg bg-gray-50 group border border-gray-100">
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-64 md:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700" 
      onError={(e) => { e.target.parentElement.style.display = 'none'; }} 
    />
  </div>
);

const BlogSalonMarketing = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-rose-gold/20">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-rose-gold/5 to-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm font-bold text-charcoal/40 mb-8">
            <Link to="/" className="hover:text-rose-gold transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/blog" className="hover:text-rose-gold transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-rose-gold">Salon Marketing & Growth</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-4 py-1.5 bg-rose-gold/10 text-rose-gold font-black text-xs uppercase tracking-widest rounded-full mb-6">
              Salon Marketing Ideas
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-charcoal leading-tight mb-8 tracking-tight">
              The Ultimate Guide to Salon Marketing Ideas
            </h1>

            <div className="flex flex-wrap items-center gap-8 text-charcoal/60 font-medium">
              <div className="flex items-center gap-4">
                <img src="https://i.pravatar.cc/150?u=radhika" alt="Radhika Sathe" className="w-14 h-14 rounded-full border-[3px] border-white shadow-lg object-cover" />
                <div className="flex flex-col">
                  <span className="text-charcoal font-black text-lg">Radhika Sathe</span>
                  <span className="text-sm font-bold uppercase tracking-wider text-charcoal/40">March 16, 2026</span>
                </div>
              </div>
              <div className="h-10 w-px bg-gray-200 hidden sm:block"></div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-gold/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-rose-gold" />
                </div>
                <span className="font-bold">10 min read</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            
            {/* Horizontal Share Buttons */}
            <div className="flex gap-4 mb-8">
              <span className="text-sm font-black text-charcoal/40 uppercase tracking-widest flex items-center mr-2">Share:</span>
              <button className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-charcoal hover:bg-rose-gold hover:text-white transition-all" title="Copy Link"><Link2 className="w-4 h-4" /></button>
              <button className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-charcoal hover:bg-rose-gold hover:text-white transition-all" title="Email"><Mail className="w-4 h-4" /></button>
              <button className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-charcoal hover:bg-rose-gold hover:text-white transition-all" title="Share"><Share2 className="w-4 h-4" /></button>
            </div>

            {/* Main Hero Image */}
            <FeatureImg 
              src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=1200" 
              alt="Salon Marketing Ideas" 
            />

            <article className="max-w-none">
              
              <P className="text-2xl !leading-relaxed text-charcoal !font-medium border-l-[6px] border-rose-gold pl-8 py-2 italic bg-gradient-to-r from-rose-gold/5 to-transparent">
                Transforming your salon into a thriving, profitable business takes more than just creative flair and technical expertise—it demands a well-thought-out, realistic, and consistently executed marketing strategy. Whether you’re an independent stylist, a boutique salon owner, or managing a full-service beauty studio, attracting and retaining clients in today’s competitive environment requires smart, adaptable approaches.
              </P>
              
              <P>
                This guide brings together a complete salon marketing plan, packed with practical ideas tailored to your unique goals and clientele. From timeless branding principles to data-driven salon advertising techniques, each section is designed to help you grow sustainably. You’ll discover effective salon marketing strategies, engaging promotion ideas, and high-impact promotion ideas that go beyond short-term campaigns to build lasting visibility and customer loyalty.
              </P>

              <P>
                Whether you’re just starting or refining an existing marketing plan for your salon, these insights will help you stay ahead—and future-ready—at every stage of your salon’s journey.
              </P>

              <H2>Defining Your Salon’s Brand & Audience</H2>
              
              <H3>Understand Your Audience</H3>
              <P>
                To build a strong marketing strategy for beauty salons, start by creating detailed customer profiles that include demographics, lifestyle habits, and specific beauty needs. Segment your clientele into clear groups—such as bridal, evening wear, professionals, teens, and men—and identify both your current customers and untapped target audiences for focused marketing.
              </P>

              <H3>Craft a Clear Salon Brand</H3>
              <P>
                Start by clearly defining your salon’s unique identity and core values—what sets you apart from competitors and why clients should choose you. Then, establish a consistent visual language through your logo, colours, fonts, and tone of voice. Ensure every customer touchpoint, from website design to interior décor, reflects your brand message seamlessly.
              </P>

              <H2>Building a Rock-Solid Foundation</H2>
              
              <FeatureImg 
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=1000" 
                alt="Digital Catalog" 
              />
              
              <H3>Salon Website</H3>
              <P>
                A responsive, easy-to-navigate website is the cornerstone of any successful salon marketing strategy. Ensure your site is mobile-friendly and structured for a smooth user experience.
              </P>

              <H3>Google My Business & Review Management</H3>
              <P>
                Claiming and updating your Google My Business listing is essential for increasing your salon’s online visibility and attracting local clients. Encourage satisfied customers to leave positive, as these act as social proof. Always respond to reviews—both positive and negative—promptly and professionally to build trust and credibility.
              </P>

              <H3>Social Media Presence</H3>
              <P>
                Select social media platforms where your target audience is most active—whether it’s Instagram, Pinterest, Facebook, or TikTok. Share high-quality, engaging visuals such as before-and-after transformations, live tutorials, and Q&A sessions. Make full use of platform features like Reels, Stories, and Polls to showcase creative hair salon advertising ideas effectively.
              </P>

              <H2>Salon Marketing Ideas to Drive Engagement</H2>

              <H3>Loyalty & Referral Programmes</H3>
              <P>
                Loyalty and referral programmes are powerful strategies for client retention and organic growth. Reward your regular customers with offers like “Book 5 services, get 1 free” to encourage repeat visits. Additionally, incentivise referrals by offering discounts or free upgrades when clients introduce new customers to your salon.
              </P>

              <H3>Seasonal & Themed Promotions</H3>
              <P>
                Seasonal promotions are a great way to stay relevant and boost client engagement. Plan special offers around holidays—like Valentine’s pamper packs or festive grooming bundles—and align them with seasonal service updates. Pair these with themed content or styling tutorials to create excitement and encourage bookings during key periods.
              </P>

              <H3>Collaboration & Partnerships</H3>
              <P>
                Forming partnerships with local businesses such as bridal stores, gyms, and fashion boutiques can significantly expand your salon’s reach. Collaborate on joint marketing campaigns or co-host events like pop-up styling nights. These partnerships help you tap into complementary customer bases and create engaging, cross-promotional opportunities for increased visibility and bookings.
              </P>

              <H2>Digital Advertising & Outreach</H2>
              
              <FeatureImg 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000" 
                alt="Offers and promotional ads" 
              />

              <H3>Paid Social Media Ads</H3>
              <P>
                Harness the power of social media advertising by running targeted Instagram and Facebook ads focused on your target area. Promote visually striking content, such as hair transformations or intricate nail art, with clear call to action. This approach not only drives engagement but also encourages direct bookings from nearby potential clients.
              </P>

              <H3>Google Ads for Local Search</H3>
              <P>
                When setting up Google Ads, focus on creating campaigns to attract local clients actively searching for services. Highlight popular offerings such as hair treatments or styling, which tend to convert better and fill up quickly with the right targeting.
              </P>

              <H3>Email Marketing Campaigns</H3>
              <P>
                Email marketing is a cost-effective way to nurture client relationships and boost loyalty. Start by growing your mailing list with simple incentives like “Subscribe for 10% off.” Send monthly newsletters featuring hair care tips, service updates, and client spotlights, and reward your subscribers with exclusive salon promotions and personalised offers.
              </P>

              <H2>Content Marketing: Educate & Engage</H2>

              <H3>Blog Content That Informs</H3>
              <P>
                Creating informative how-to guides is a valuable content marketing strategy for salons. Share expert tips on topics like “How to maintain balayage” or “Home nail-care routines” to engage and educate your audience. Enhance these guides with videos or step-by-step photo sequences for visual appeal and better client understanding.
              </P>

              <H3>Video Tutorials & Instagram Lives</H3>
              <P>
                Video content is an excellent way to connect with your salon audience and showcase your expertise. Share engaging styling tutorials, product demonstrations, and behind-the-scenes clips to build trust and interest. Host Instagram Live sessions for interactive Q&As, where you can highlight upcoming services and answer client questions in real time.
              </P>

              <H3>User-Generated Content and Hashtags</H3>
              <P>
                User-generated content is a powerful salon marketing tool. Encourage clients to tag your salon in their social media posts to boost visibility. Offer small rewards or recognition for the best photos shared. Reposting this content adds authenticity to your brand and helps potential clients connect with real, relatable salon experiences.
              </P>

              <H2>Offline Salon Advertising & Promotions</H2>

              <H3>In-Salon Signage & Displays</H3>
              <P>
                Maximise in-salon advertising by showcasing your most popular or high-margin services at the checkout counter where clients naturally pause. Display flyers with seasonal offers or introduce QR codes that new visitors can scan to instantly access your online booking page, making it easy to convert interest into confirmed appointments.
              </P>

              <H3>Community Involvement</H3>
              <P>
                Getting involved in local events is a great way to boost your salon’s visibility and connect with the community. Sponsor school functions, charity drives, or similar gatherings to enhance brand recognition. You can also offer pop-up styling services at community fairs to showcase your work and attract new clients.
              </P>

              <H3>Direct Mail & Local Flyers</H3>
              <P>
                Direct mail remains a highly effective offline salon advertising method. Send eye-catching postcards featuring seasonal offers to nearby households, helping you reach potential clients who may not yet follow your digital channels. Include introductory discounts or vouchers to encourage first-time visits and turn new leads into loyal customers.
              </P>

              <H2>Measuring Success: KPIs & Refinement</H2>
              
              <FeatureImg 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000" 
                alt="Salon Marketing performance measurement" 
              />

              <H3>Track Key Performance Indicators</H3>
              <P>
                Tracking your salon’s performance is essential for refining your marketing efforts. Monitor key metrics such as appointment volume, average ticket value, and repeat client rate to understand what’s working. Utilise data from your booking system and tools like Google Analytics to make informed, data-driven decisions for continuous improvement.
              </P>

              <H3>A/B Test Promotions</H3>
              <P>
                Experimentation is key to discovering what resonates with your salon audience. Test different price points, service packages, or promotional messaging to see what drives bookings and engagement. Analyse the results carefully and invest more in the strategies that deliver the best outcomes, helping you optimise your marketing for greater impact.
              </P>

              <H3>Regular Strategy Reviews</H3>
              <P>
                Regularly reviewing your salon’s marketing performance—monthly or quarterly—helps you stay agile and responsive. Assess what’s working well and what needs improvement across campaigns and platforms. Use these insights to fine-tune your salon marketing plan, ensuring your strategies remain effective, relevant, and aligned with your evolving business goals.
              </P>

              <H2>Advanced Salon Marketing Strategies</H2>

              <H3>Retargeting Campaigns</H3>
              <P>
                Retargeting is a powerful tool in your salon marketing strategy. Use Facebook Pixel or Google remarketing to reconnect with visitors who’ve browsed your website but didn’t book. Serve tailored ads reminding them of specific services, limited-time promotions, or incomplete bookings, encouraging them to return and complete their appointment.
              </P>

              <H3>Subscription or Membership Models</H3>
              <P>
                Introducing subscription or membership packages, such as a “Monthly Blow Dry Club” or “Colour-Care Subscription”, can significantly enhance client loyalty. These offerings provide convenience and exclusive value for clients, while generating predictable, recurring revenue for your salon. It’s a smart strategy for boosting retention and building long-term customer relationships.
              </P>

              <H3>Email & SMS Automation</H3>
              <P>
                Automation can greatly improve client engagement and salon efficiency. Set up automated appointment reminders to reduce no-shows, and schedule birthday or anniversary messages to add a personal touch. Enhance these communications with thoughtful incentives or exclusive offers, making clients feel valued while encouraging repeat visits and long-term loyalty.
              </P>

              <H2>Promotional Tools & Where ReSpark Helps</H2>
              
              <P>
                Towards the latter part of your marketing journey, when consistency, efficiency, and client retention become your primary focus, you’ll need reliable, user-friendly tools to streamline your operations. That’s where ReSpark Salon & Spa Software comes in. Specifically designed for beauty businesses, ReSpark helps you implement and automate your salon marketing strategies without needing a large team or technical expertise.
              </P>

              {/* Highlight Box */}
              <div className="bg-gradient-to-br from-rose-gold/5 to-rose-gold/[0.02] p-10 md:p-14 rounded-[3rem] border border-rose-gold/20 my-16 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-rose-gold/10 rounded-br-[100px] -z-10"></div>
                <h3 className="text-3xl font-black text-charcoal mb-8">Top 3 Features of <span className="text-rose-gold">ReSpark Software:</span></h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-rose-gold text-white flex items-center justify-center shrink-0 mt-1 shadow-lg">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-[1.125rem] text-charcoal/80 font-bold leading-relaxed">Automated email and SMS reminders to reduce no-shows and keep clients engaged.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-rose-gold text-white flex items-center justify-center shrink-0 mt-1 shadow-lg">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-[1.125rem] text-charcoal/80 font-bold leading-relaxed">Review prompts to help you consistently collect and display high Google ratings.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-rose-gold text-white flex items-center justify-center shrink-0 mt-1 shadow-lg">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-[1.125rem] text-charcoal/80 font-bold leading-relaxed">Campaign creator tool with drag-and-drop functionality to design and publish customized posts with ease.</span>
                  </li>
                </ul>
              </div>

              <H2>Final Recommendations</H2>
              <P>
                As you begin to implement your marketing plan, keep these guiding principles in mind to maximise your efforts and avoid overwhelm. Success comes from thoughtful, consistent action, tailored to your goals and audience.
              </P>
              
              <ul className="space-y-6 my-10 bg-gray-50 p-8 md:p-12 rounded-[2rem] border border-gray-100">
                <li className="flex items-start gap-4 text-[1.125rem] text-charcoal/75 leading-relaxed font-medium">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-rose-gold shrink-0"></div>
                  <span><strong className="text-charcoal font-black text-xl mr-2">Start small, test early.</strong> Focus initially on one or two marketing channels—perhaps Instagram ads or referral promotions—to see what resonates. Testing small allows you to refine your strategy without wasting time or resources.</span>
                </li>
                <li className="flex items-start gap-4 text-[1.125rem] text-charcoal/75 leading-relaxed font-medium">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-rose-gold shrink-0"></div>
                  <span><strong className="text-charcoal font-black text-xl mr-2">Focus on retention.</strong> It’s more cost-effective to retain existing clients than to attract new ones. Invest in loyalty programmes and personalised experiences to keep customers coming back.</span>
                </li>
                <li className="flex items-start gap-4 text-[1.125rem] text-charcoal/75 leading-relaxed font-medium">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-rose-gold shrink-0"></div>
                  <span><strong className="text-charcoal font-black text-xl mr-2">Maintain consistency.</strong> Sporadic marketing rarely delivers results. Use automation tools like ReSpark to ensure your email campaigns, social posts, and promotions stay on track.</span>
                </li>
                <li className="flex items-start gap-4 text-[1.125rem] text-charcoal/75 leading-relaxed font-medium">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-rose-gold shrink-0"></div>
                  <span><strong className="text-charcoal font-black text-xl mr-2">Invest in visuals.</strong> Professionally shot images, video tutorials, and authentic client stories build trust and drive bookings far more effectively than generic content.</span>
                </li>
                <li className="flex items-start gap-4 text-[1.125rem] text-charcoal/75 leading-relaxed font-medium">
                  <div className="w-2 h-2 mt-2.5 rounded-full bg-rose-gold shrink-0"></div>
                  <span><strong className="text-charcoal font-black text-xl mr-2">Allow flexibility.</strong> Marketing isn’t static. Stay agile by reviewing your salon marketing plan regularly to adapt to seasonal shifts, new salon trends, or changing client preferences.</span>
                </li>
              </ul>

              <H2>Your Next Steps</H2>
              <P>
                To kick off your salon marketing journey, start by selecting two actionable strategies to launch this month, such as introducing a referral programme and running a targeted social media ad campaign.
              </P>
              <P>
                Most importantly, begin using ReSpark Salon & Spa Software to automate key marketing tasks and track results, giving you more time to focus on delivering exceptional client experiences.
              </P>

            </article>
            
            <div className="h-px bg-gray-200 my-16"></div>

            {/* Author Section - Extra Compact */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 bg-white border border-gray-100 p-6 rounded-2xl shadow-sm relative overflow-hidden group hover:border-rose-gold/20 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-rose-gold"></div>
              <img src="https://i.pravatar.cc/150?u=radhika" alt="Radhika Sathe" className="w-16 h-16 rounded-full shadow-sm object-cover ring-2 ring-gray-50" />
              <div>
                <span className="text-[9px] font-black text-rose-gold uppercase tracking-widest mb-1 block">Written By</span>
                <h3 className="text-lg font-black text-charcoal mb-1">Radhika Sathe</h3>
                <p className="text-xs text-charcoal/60 leading-relaxed font-medium">
                  With 18+ years of experience, Radhika specializes in beauty tech storytelling and data-driven CRM strategies.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer CTA Section - Extra Slim Horizontal */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-rose-gold to-[#4B2C82] rounded-xl px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
          <div>
            <p className="text-xs font-black text-white/60 uppercase tracking-widest mb-0.5">ReSpark Software</p>
            <h2 className="text-lg font-black text-white leading-tight">Ready to automate your salon marketing?</h2>
          </div>
          <button className="shrink-0 px-6 py-2.5 bg-white text-rose-gold rounded-full font-black text-sm hover:bg-gray-100 transition-all shadow hover:scale-105 active:scale-95 whitespace-nowrap">
            Book Free Demo
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogSalonMarketing;

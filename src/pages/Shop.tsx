import { motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const Shop = () => {
  const location = useLocation()
  const isArabic = location.pathname.startsWith('/ar')
  const featuredProducts = [
    {
      id: 1,
      name: isArabic ? 'ري-كولاجين' : 'Re-Collagen',
      price: '$12.00',
      originalPrice: null,
      description: 'ريتش فود– وجبتك الساخنة أينما كنت! وجبات ذاتية التسخين، طبيعية 100%، خالية من المواد الحافظة، ومدعّمة بالكولاجين الحيوي لدعم صحتك ونشاطك. بتغليف صديق للبيئة وخفيف الوزن، كل ما عليك هو إضافة أي سائل… دقائق معدودة وتستمتع بوجبة لذيذة، مغذية، وجاهزة أينما أخذتك الحياة.',
      rating: 5,
      reviews: 247,
      features: isArabic ? ['تسخين ذاتي خلال 5 دقائق', 'نكهات أصيلة من الشرق الأوسط وشمال أفريقيا', 'قيمة غذائية عالية', 'معتمد حلال', 'تغليف قابل للزراعة'] : ['Self-heating in 5 minutes', 'Authentic MENA flavors', 'High nutritional value', 'Halal certified', 'Plantable packaging'],
      badge: isArabic ? 'صحي' : 'Health Focused',
      image: '/images/reachfood-package.jpg',
      category: 'Wellness'
    },
    {
      id: 2,
      name: isArabic ? 'ري-بروتين 8$' : 'The re-protein 8$',
      price: '$8',
      originalPrice: null,
      description: 'ري-بروتين وجبة مدعمة للتعافي الصحي، غنية بالبروتين، سهلة التناول والتسخين في أي مكان بفضل خاصية التسخين الذاتي. دعم عضلاتك وطاقة جسمك أينما كنت، بدون تعب ولا مجهود! جرّب ري-بروتين الآن واستمتع بوجبة دافئة وصحية في لحظات!',
      rating: 5,
      reviews: 312,
      features: isArabic ? ['تشكيلة فاخرة', 'طرق طهي تقليدية', 'مكونات مميزة', 'أصالة ثقافية', 'تحضير فوري'] : ['Gourmet variety selection', 'Traditional cooking methods', 'Premium ingredients', 'Cultural authenticity', 'Instant preparation'],
      badge: isArabic ? 'اختيار الذواقة' : 'Gourmet Choice',
      image: '/images/icons/3dzz.jpg',
      category: 'Gourmet'
    }
  ]

  const subscriptionPlans = [
    {
      name: isArabic ? 'الاستعداد للطوارئ' : 'Emergency Preparedness',
      monthlyPrice: '$89',
      annualPrice: '$890',
      savings: '$178',
      meals: '8 meals/month',
      features: isArabic ? [
        'تشكيلة وجبات طوارئ متنوعة',
        'تخزين طويل الأمد',
        'شحن أولوية',
        'دليل تخطيط للطوارئ',
        'خصومات للمنظمات'
      ] : [
        'Mixed emergency meal selection',
        'Extended shelf life storage',
        'Priority shipping',
        'Emergency planning guide',
        'Bulk organization discounts'
      ],
      popular: false
    },
    {
      name: isArabic ? 'مستكشف المغامرة' : 'Adventure Explorer',
      monthlyPrice: '$49',
      annualPrice: '$490',
      savings: '$98',
      meals: '4 meals/month',
      features: isArabic ? [
        'وجبات خارجية عالية الطاقة',
        'تغليف خفيف جداً',
        'تصميم مقاوم للطقس',
        'تخطيط وجبات للمغامرة',
        'خصومات على معدات الشركاء'
      ] : [
        'High-energy outdoor meals',
        'Ultra-lightweight packaging',
        'Weather-resistant design',
        'Adventure meal planning',
        'Gear partnership discounts'
      ],
      popular: true
    },
    {
      name: isArabic ? 'عافية الشركات' : 'Corporate Wellness',
      monthlyPrice: '$129',
      annualPrice: '$1290',
      savings: '$258',
      meals: '12 meals/month',
      features: isArabic ? [
        'وجبات محسّنة للمكاتب',
        'خيارات مشاركة للفِرَق',
        'تكامل مع برامج العافية',
        'تتبع التغذية',
        'خصومات للشركات'
      ] : [
        'Office-optimized meals',
        'Team sharing options',
        'Wellness program integration',
        'Nutrition tracking',
        'Corporate volume discounts'
      ],
      popular: false
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              R<span className="text-orange-400">E</span>ACHF<span className="text-orange-400">OO</span>D {isArabic ? 'المتجر' : 'Shop'}
            </h1>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              {isArabic ? 'اختبر تقنية التسخين الذاتي الثورية مع وجبات تطهى بنفسها خلال 5 دقائق. تغذية مميزة تلتقي بالراحة أينما كنت.' : 'Experience revolutionary self-heating technology with meals that cook themselves in 5 minutes. Premium nutrition meets convenience wherever you are.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                {isArabic ? 'تسوق الآن' : 'Shop Now'}
              </button>
              <button className="border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                {isArabic ? 'اعرف المزيد' : 'Learn More'}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {isArabic ? 'منتجات مميزة' : 'Featured Products'}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {isArabic ? 'اكتشف وجباتنا ذاتية التسخين المصممة لأنماط الحياة العصرية' : 'Discover our premium self-heating meals designed for modern lifestyles'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  z: 50
                }}
                className="relative rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group perspective-1000 min-h-[600px]"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                {/* Full Background Image */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                  style={{
                    filter: 'brightness(0.7) drop-shadow(0 10px 20px rgba(0,0,0,0.3))'
                  }}
                />

                {/* Overlay gradient for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 transition-all duration-500"></div>

                {/* Product Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    {product.badge}
                  </span>
                </div>

                {/* 3D Floating Elements */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-y-2 group-hover:rotate-12 z-10">
                  <div className="w-8 h-8 bg-teal-500 rounded-full animate-pulse shadow-lg"></div>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:-translate-y-2 group-hover:-rotate-6 z-10">
                  <div className="w-6 h-6 bg-orange-400 rounded-full animate-bounce shadow-lg"></div>
                </div>

                {/* Product Content - Positioned at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  {/* 3D Background Pattern */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <div className="w-full h-full bg-gradient-to-br from-teal-100 to-orange-100 transform group-hover:scale-105 group-hover:rotate-1 transition-transform duration-700 rounded-lg"></div>
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-teal-200 transition-colors duration-300 drop-shadow-lg">
                      {product.name}
                    </h3>
                    
                    <p className="text-white/90 mb-4 leading-relaxed text-sm drop-shadow-md">
                      {product.description}
                    </p>

                    {/* Features with 3D Icons */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-white mb-2 drop-shadow-md">{isArabic ? 'مميزات أساسية:' : 'Key Features:'}</h4>
                      <ul className="space-y-1">
                        {product.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-white/90">
                            <div className="w-4 h-4 bg-teal-500 rounded-full mr-2 flex-shrink-0 group-hover:animate-pulse shadow-md"></div>
                            <span className="drop-shadow-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Rating with 3D Stars */}
                    <div className="flex items-center mb-4">
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i} 
                            className="w-4 h-4 text-yellow-400 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 drop-shadow-md"
                            style={{ transitionDelay: `${i * 100}ms` }}
                          >
                            ⭐
                          </div>
                        ))}
                      </div>
                      <span className="text-sm text-white/90 ml-2 drop-shadow-sm">
                        ({product.reviews} {isArabic ? 'مراجعة' : 'reviews'})
                      </span>
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-teal-300 group-hover:text-teal-200 transition-colors duration-300 drop-shadow-lg">
                          {product.price}
                        </span>
                      </div>
                      <button className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 shadow-lg">
                        {isArabic ? 'أضف إلى السلة' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 3D Showcase Call-to-Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="bg-gradient-to-r from-teal-50 to-orange-50 rounded-2xl p-8 transform hover:scale-105 transition-transform duration-500">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {isArabic ? 'اختبر مستقبل الغذاء' : 'Experience the Future of Food'}
              </h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                {isArabic ? 'تلتقي تقنية التسخين الذاتي الثورية بالنكهات الأصيلة. كل وجبة مزيج مثالي من الراحة والتغذية والطعم.' : 'Revolutionary self-heating technology meets authentic flavors. Each meal is a perfect blend of convenience, nutrition, and taste.'}
              </p>
              <button className="bg-gradient-to-r from-orange-400 to-red-500 hover:from-orange-500 hover:to-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                {isArabic ? 'عرض كل المنتجات' : 'View All Products'}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {isArabic ? 'خطط الاشتراك' : 'Subscription Plans'}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {isArabic ? 'اختر الخطة التي تناسب نمط حياتك ولا تفوت وجباتنا اللذيذة ذاتية التسخين' : 'Choose the plan that fits your lifestyle and never run out of delicious, self-heating meals'}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {subscriptionPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${
                  plan.popular ? 'ring-2 ring-teal-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-teal-500 text-white text-center py-2 text-sm font-semibold">
                    {isArabic ? 'الأكثر شعبية' : 'Most Popular'}
                  </div>
                )}
                
                <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-teal-600">{plan.monthlyPrice}</span>
                    <span className="text-slate-600">{isArabic ? '/شهر' : '/month'}</span>
                    <div className="text-sm text-slate-500 mt-1">
                      {isArabic ? `أو ${plan.annualPrice}/سنة (وفر ${plan.savings})` : `or ${plan.annualPrice}/year (save ${plan.savings})`}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-lg font-semibold text-slate-800 mb-2">{isArabic ? plan.meals.replace('meals/month', 'وجبة/شهر') : plan.meals}</div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-5 h-5 bg-teal-500 rounded-full flex-shrink-0 mt-0.5 mr-3"></div>
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 ${
                    plan.popular
                      ? 'bg-teal-500 hover:bg-teal-600 text-white'
                      : 'border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white'
                  }`}>
                    {isArabic ? 'اختر الخطة' : 'Choose Plan'}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose R<span className="text-orange-400">E</span>ACHF<span className="text-orange-400">OO</span>D?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Revolutionary technology meets authentic flavors
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🔥',
                title: 'Self-Heating Technology',
                description: 'Calcium oxide reaction heats your meal in just 5 minutes without any external heat source'
              },
              {
                icon: '🌱',
                title: 'Plantable Packaging',
                description: 'Eco-friendly packaging that grows into wildflowers after use, supporting environmental sustainability'
              },
              {
                icon: '🌍',
                title: 'Authentic MENA Flavors',
                description: 'Traditional Middle Eastern and North African recipes with authentic spices and ingredients'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl hover:bg-slate-50 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 via-teal-700 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {isArabic ? 'هل أنت مستعد لاختبار مستقبل الغذاء؟' : 'Ready to Experience the Future of Food?'}
            </h2>
            <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have discovered the convenience and taste of self-heating meals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                {isArabic ? 'تسوق الآن' : 'Shop Now'}
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-teal-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                {isArabic ? 'اعرف المزيد' : 'Learn More'}
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Shop
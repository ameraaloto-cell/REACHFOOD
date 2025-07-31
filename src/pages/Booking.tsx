import { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, Phone, Mail, MapPin } from 'lucide-react'

const Booking = () => {
  const [selectedService, setSelectedService] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [step, setStep] = useState(1)

  const services = [
    { id: 'premium-haircut', name: 'Premium Haircut', price: '€45', duration: '45 min' },
    { id: 'executive-cut', name: 'Executive Cut', price: '€55', duration: '60 min' },
    { id: 'beard-trim', name: 'Beard Trim & Style', price: '€25', duration: '30 min' },
    { id: 'hot-towel-shave', name: 'Hot Towel Shave', price: '€35', duration: '40 min' },
    { id: 'executive-package', name: 'The Executive Package', price: '€85', duration: '90 min' },
    { id: 'vip-experience', name: 'The VIP Experience', price: '€120', duration: '120 min' }
  ]

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
    '18:00', '18:30', '19:00', '19:30'
  ]

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId)
    setStep(2)
  }

  const handleDateSelect = (date: string) => {
    setSelectedDate(date)
    setStep(3)
  }

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time)
    setStep(4)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle booking submission
    console.log('Booking submitted:', { selectedService, selectedDate, selectedTime })
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="section-title">Book Your Appointment</h1>
            <p className="section-subtitle">
              Experience luxury grooming with Germany's Best Barber 2016. 
              Select your service and preferred time to secure your appointment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4].map((stepNumber) => (
                <div
                  key={stepNumber}
                  className={`flex items-center ${
                    stepNumber < 4 ? 'flex-1' : ''
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step >= stepNumber
                        ? 'bg-primary-600 text-white'
                        : 'bg-dark-700 text-gray-400'
                    }`}
                  >
                    {stepNumber}
                  </div>
                  {stepNumber < 4 && (
                    <div
                      className={`flex-1 h-1 mx-2 ${
                        step > stepNumber ? 'bg-primary-600' : 'bg-dark-700'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm text-gray-400">
              <span>Select Service</span>
              <span>Choose Date</span>
              <span>Pick Time</span>
              <span>Confirm</span>
            </div>
          </div>

          {/* Step 1: Service Selection */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-serif font-bold text-white mb-8 text-center">
                Select Your Service
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service) => (
                  <motion.div
                    key={service.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="card cursor-pointer"
                    onClick={() => handleServiceSelect(service.id)}
                  >
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                      <div className="flex items-center justify-center space-x-4 mb-4">
                        <span className="text-2xl font-bold text-primary-400">{service.price}</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400 flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.duration}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 2: Date Selection */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-serif font-bold text-white mb-8 text-center">
                Choose Your Date
              </h2>
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 14 }, (_, i) => {
                  const date = new Date()
                  date.setDate(date.getDate() + i)
                  const dateString = date.toISOString().split('T')[0]
                  const dayName = date.toLocaleDateString('en-US', { weekday: 'short' })
                  const dayNumber = date.getDate()
                  
                  return (
                    <motion.button
                      key={dateString}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-4 rounded-lg text-center ${
                        selectedDate === dateString
                          ? 'bg-primary-600 text-white'
                          : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                      }`}
                      onClick={() => handleDateSelect(dateString)}
                    >
                      <div className="text-xs mb-1">{dayName}</div>
                      <div className="text-lg font-semibold">{dayNumber}</div>
                    </motion.button>
                  )
                })}
              </div>
            </motion.div>
          )}

          {/* Step 3: Time Selection */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-serif font-bold text-white mb-8 text-center">
                Select Your Time
              </h2>
              <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                {timeSlots.map((time) => (
                  <motion.button
                    key={time}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 rounded-lg text-center ${
                      selectedTime === time
                        ? 'bg-primary-600 text-white'
                        : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                    }`}
                    onClick={() => handleTimeSelect(time)}
                  >
                    {time}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Step 4: Confirmation */}
          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-serif font-bold text-white mb-8 text-center">
                Confirm Your Booking
              </h2>
              
              <div className="card">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Service:</span>
                    <span className="text-white font-semibold">
                      {services.find(s => s.id === selectedService)?.name}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Date:</span>
                    <span className="text-white font-semibold">
                      {new Date(selectedDate).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Time:</span>
                    <span className="text-white font-semibold">{selectedTime}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Price:</span>
                    <span className="text-primary-400 font-bold text-xl">
                      {services.find(s => s.id === selectedService)?.price}
                    </span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      className="w-full p-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:border-primary-400 focus:outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      required
                      className="w-full p-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:border-primary-400 focus:outline-none"
                      placeholder="+49 30 1234 5678"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full p-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:border-primary-400 focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Special Requests</label>
                    <textarea
                      className="w-full p-3 bg-dark-700 border border-dark-600 rounded-lg text-white focus:border-primary-400 focus:outline-none"
                      rows={3}
                      placeholder="Any special requests or notes..."
                    />
                  </div>
                </div>

                <button type="submit" className="btn-primary w-full text-lg py-4">
                  Confirm Booking
                </button>
              </form>
            </motion.div>
          )}

          {/* Navigation */}
          {step > 1 && (
            <div className="flex justify-between mt-8">
              <button
                onClick={() => setStep(step - 1)}
                className="btn-secondary"
              >
                Back
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <MapPin className="w-12 h-12 text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
              <p className="text-gray-400">Berlin, Germany</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <Phone className="w-12 h-12 text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-400">+49 30 1234 5678</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Mail className="w-12 h-12 text-primary-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400">info@auxthebarber.com</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Booking 
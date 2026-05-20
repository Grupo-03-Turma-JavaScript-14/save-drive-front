import { AnimatePresence, motion } from 'framer-motion'
import './Loading.css'

interface LoadingProps {
  show?: boolean
}

interface MascotLogoProps {
  className?: string
  showText?: boolean
  size?: 'sm' | 'md' | 'lg'
}

function MascotLogo({
  className = '',
  showText = true,
  size = 'md',
}: MascotLogoProps) {
  const dimensions = {
    sm: { width: 44, height: 44, textClass: 'text-lg' },
    md: { width: 80, height: 80, textClass: 'text-2xl' },
    lg: { width: 140, height: 140, textClass: 'text-4xl' },
  }[size]

  return (
    <div className={`mascot-logo ${className}`}>
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mascot-logo-svg"
      >
        <path
          d="M50 12 L82 23 C82 54 68 76 50 86 C32 76 18 54 18 23 Z"
          fill="#FFFFFF"
          stroke="#8DE1A9"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        <path
          d="M50 16 L76 25 C76 50 64 69 50 78 C36 69 24 50 24 25 Z"
          fill="#F0FDF4"
          opacity="0.6"
        />

        <circle cx="21" cy="48" r="7" fill="#1565C0" />
        <circle cx="19" cy="46" r="1.5" fill="#FFFFFF" />

        <path
          d="M32 55 C32 63 40 65 44 65 C44 58 38 55 32 55 Z"
          fill="#1E88E5"
        />

        <path
          d="M62 55 C62 63 70 65 74 65 C74 58 68 55 62 55 Z"
          fill="#1E88E5"
        />

        <path d="M75 48 C83 45 80 52 75 51 Z" fill="#1565C0" />

        <rect x="25" y="44" width="52" height="11" rx="5" fill="#1565C0" />

        <path
          d="M30 46 C30 26 70 26 70 46 Z"
          fill="#4DA6FF"
          stroke="#1565C0"
          strokeWidth="2"
        />

        <path
          d="M40 34 C44 31 56 31 60 34 L57 41 C55 39 45 39 43 41 Z"
          fill="#E3F2FD"
          stroke="#1565C0"
          strokeWidth="1.5"
        />

        <path d="M40 34 L32 44" stroke="#1565C0" strokeWidth="1.5" />
        <path d="M60 34 L68 44" stroke="#1565C0" strokeWidth="1.5" />
        <path d="M50 31 L50 38" stroke="#1565C0" strokeWidth="1.5" />
        <path d="M43 41 L43 46" stroke="#1565C0" strokeWidth="0.5" />
        <path d="M57 41 L57 46" stroke="#1565C0" strokeWidth="0.5" />
      </svg>

      {showText && (
        <div className="mascot-logo-text">
          <span className="mascot-logo-save">Save</span>
          <span className="mascot-logo-drive">Drive</span>
        </div>
      )}
    </div>
  )
}

function Loading({ show = true }: LoadingProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loading-overlay"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
        >
          <motion.div
            className="loading-wrapper"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <div className="loading-spinner-area">
              <div className="loading-spinner">
                {Array.from({ length: 28 }).map((_, index) => (
                  <motion.span
                    key={index}
                    className="spinner-line"
                    style={{
                      transform: `rotate(${index * 12.85}deg) translateY(-62px)`,
                    }}
                    animate={{
                      opacity: [0.18, 1, 0.18],
                      scale: [0.85, 1.12, 0.85],
                    }}
                    transition={{
                      duration: 1.25,
                      repeat: Infinity,
                      delay: index * 0.035,
                      ease: 'linear',
                    }}
                  />
                ))}
              </div>

              <motion.div
                className="loading-logo-box"
                animate={{
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <MascotLogo size="lg" showText={false} />
              </motion.div>
            </div>

            <div className="loading-bar">
              <motion.div
                className="loading-bar-fill"
                animate={{ x: ['-100%', '0%', '100%'] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>

            <motion.h1
              className="loading-text"
              animate={{ opacity: [0.55, 1, 0.55] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              CARREGANDO...
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loading
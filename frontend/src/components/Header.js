import React from 'react';
import AnimatedBackground from './AnimatedBackground';

const Header = () => {
  return (
    <>
      <AnimatedBackground />
      
      {/* Header Minimalista Flotante */}
      <header style={{
        position: 'fixed',
        top: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        width: 'max-content'
      }}>
        <div style={{
          background: 'rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '50px',
          padding: '12px 24px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '32px'
        }}>
          
          {/* Logo */}
          <div style={{
            color: 'white',
            fontWeight: 600,
            fontSize: '14px',
            whiteSpace: 'nowrap',
            background: 'linear-gradient(to right, #3b82f6, #14b8a6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            SmartDocX
          </div>
          
          {/* Navigation */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px'
          }}>
            <a href="#" style={{
              color: 'rgba(255, 255, 255, 0.7)',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'color 0.2s ease',
              whiteSpace: 'nowrap'
            }} 
            onMouseEnter={(e) => e.target.style.color = 'white'}
            onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>
              Inicio
            </a>
            <a href="#" style={{
              color: 'rgba(255, 255, 255, 0.7)',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'color 0.2s ease',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => e.target.style.color = 'white'}
            onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>
              Documentos
            </a>
            <a href="#" style={{
              color: 'rgba(255, 255, 255, 0.7)',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'color 0.2s ease',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => e.target.style.color = 'white'}
            onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>
              OCR
            </a>
            <a href="#" style={{
              color: 'rgba(255, 255, 255, 0.7)',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'color 0.2s ease',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => e.target.style.color = 'white'}
            onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>
              Comprimir
            </a>
            <a href="#" style={{
              color: 'rgba(255, 255, 255, 0.7)',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'color 0.2s ease',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => e.target.style.color = 'white'}
            onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.7)'}>
              Análisis
            </a>
          </nav>

          {/* Theme Toggle */}
          <div style={{
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '14px',
            whiteSpace: 'nowrap'
          }}>
            Dark/Life
          </div>

          {/* Buttons */}
          <div style={{
            display: 'flex',
            gap: '12px'
          }}>
            <button style={{
              padding: '8px 24px',
              borderRadius: '25px',
              fontSize: '14px',
              fontWeight: 500,
              border: '1px solid rgba(255, 255, 255, 0.2)',
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.2)';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.1)';
              e.target.style.transform = 'scale(1)';
            }}>
              Iniciar sesión
            </button>
            
            <button style={{
              padding: '8px 24px',
              borderRadius: '25px',
              fontSize: '14px',
              fontWeight: 600,
              border: 'none',
              background: 'white',
              color: 'black',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.9)';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'white';
              e.target.style.transform = 'scale(1)';
            }}>
              Registrarse
            </button>
          </div>
        </div>
      </header>

      {/* Background Effects */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: '25%',
          left: '25%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          opacity: 0.3,
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '25%',
          right: '25%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.1), transparent)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          opacity: 0.3,
          animation: 'float 6s ease-in-out infinite',
          animationDelay: '2s'
        }}></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.1);
          }
        }
      `}</style>
    </>
  );
};

export default Header;
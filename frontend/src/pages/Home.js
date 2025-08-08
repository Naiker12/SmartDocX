import React from 'react';
import Header from '../components/Header';

const Home = () => {
  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 25%, #0a0a0a 100%)',
      color: 'white',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: 'auto',
      margin: 0,
      padding: 0
    }}>
      <Header />
      
      {/* Background Effects */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }}>
        {/* Grid */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.3
        }}></div>
        
        {/* Orbs */}
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08), transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'float-slow 8s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.06), transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          animation: 'float-slow 10s ease-in-out infinite reverse'
        }}></div>
        
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.04), transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'pulse-slow 6s ease-in-out infinite'
        }}></div>
      </div>

      <main style={{
        paddingTop: '120px',
        paddingLeft: '24px',
        paddingRight: '24px',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          {/* Hero Section */}
          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
            fontWeight: 700,
            marginBottom: '24px',
            background: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 50%, #9ca3af 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1.2
          }}>
            Bienvenido a SmartDocX
          </h1>
          
          <p style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.5rem)',
            color: 'rgba(255, 255, 255, 0.7)',
            maxWidth: '600px',
            margin: '0 auto 48px',
            lineHeight: 1.6,
            fontWeight: 300
          }}>
            Tu plataforma de gestión documental moderna y rápida con tecnología de vanguardia.
          </p>

          {/* Features Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginTop: '80px',
            padding: '0 20px'
          }}>
            {[
              { icon: '📄', title: 'Gestión de Documentos', desc: 'Organiza y administra todos tus documentos de manera eficiente.' },
              { icon: '🔍', title: 'OCR Avanzado', desc: 'Convierte imágenes y documentos escaneados en texto editable con IA.' },
              { icon: '🗜️', title: 'Compresión Inteligente', desc: 'Reduce el tamaño de tus archivos sin perder calidad.' },
              { icon: '📊', title: 'Análisis de Datos', desc: 'Extrae insights valiosos de tus documentos con herramientas avanzadas.' },
              { icon: '🔒', title: 'Seguridad Total', desc: 'Protege tu información con encriptación de nivel empresarial.' },
              { icon: '☁️', title: 'Cloud Storage', desc: 'Accede a tus documentos desde cualquier lugar con sincronización automática.' }
            ].map((feature, index) => (
              <div key={index} style={{
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '32px 24px',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  margin: '0 auto 16px',
                  background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px'
                }}>
                  {feature.icon}
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  marginBottom: '12px',
                  color: 'white'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.6)',
                  fontSize: '0.95rem',
                  lineHeight: 1.5
                }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* CSS Animations */}
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body, html {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
          overflow-x: hidden;
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(180deg);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1.2);
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
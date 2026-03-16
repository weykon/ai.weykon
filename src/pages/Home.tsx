import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

export function Home() {
  const { isDark } = useTheme();
  const { text } = useLanguage();

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-[#121212]' : 'bg-white'}`}>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <header className="mb-16">
          <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            {text({
              zh: 'Weykon 的 AI/Agent 系统',
              en: 'Weykon\'s AI/Agent System'
            })}
          </h1>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {text({
              zh: '思维 · 能力 · 对话 · 验证',
              en: 'Mindset · Capabilities · Conversations · Verification'
            })}
          </p>
        </header>

        {/* 1. My Operating System */}
        <section className="mb-12">
          <div className={`
            backdrop-blur-md rounded-lg p-8 shadow-lg
            ${isDark ? 'bg-black/10' : 'bg-white/10'}
            border ${isDark ? 'border-white/10' : 'border-gray-200'}
          `}>
            <h2 className={`text-2xl font-bold mb-4 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <span className="text-3xl">🧠</span>
              {text({
                zh: '我的操作系统 / 思维方式',
                en: 'My Operating System'
              })}
            </h2>
            <div className={`space-y-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              <p>
                {text({
                  zh: '这是一套用于思考、创造和决策的心智框架。',
                  en: 'A mental framework for thinking, creating, and decision-making.'
                })}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className={`p-4 rounded-lg ${isDark ? 'bg-white/5' : 'bg-gray-100'}`}>
                  <h3 className="font-semibold mb-2">First Principles Thinking</h3>
                  <p className="text-sm opacity-80">
                    {text({
                      zh: '从第一性原理出发，解构复杂问题',
                      en: 'Deconstruct complex problems from first principles'
                    })}
                  </p>
                </div>
                <div className={`p-4 rounded-lg ${isDark ? 'bg-white/5' : 'bg-gray-100'}`}>
                  <h3 className="font-semibold mb-2">Iterative Refinement</h3>
                  <p className="text-sm opacity-80">
                    {text({
                      zh: '快速迭代，持续改进',
                      en: 'Rapid iteration, continuous improvement'
                    })}
                  </p>
                </div>
                <div className={`p-4 rounded-lg ${isDark ? 'bg-white/5' : 'bg-gray-100'}`}>
                  <h3 className="font-semibold mb-2">Evidence-Based Decisions</h3>
                  <p className="text-sm opacity-80">
                    {text({
                      zh: '基于证据和数据做决策',
                      en: 'Make decisions based on evidence and data'
                    })}
                  </p>
                </div>
                <div className={`p-4 rounded-lg ${isDark ? 'bg-white/5' : 'bg-gray-100'}`}>
                  <h3 className="font-semibold mb-2">Systems Thinking</h3>
                  <p className="text-sm opacity-80">
                    {text({
                      zh: '系统性思考，关注整体与连接',
                      en: 'Systems thinking, focus on the whole and connections'
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Playground */}
        <section className="mb-12">
          <div className={`
            backdrop-blur-md rounded-lg p-8 shadow-lg
            ${isDark ? 'bg-black/10' : 'bg-white/10'}
            border ${isDark ? 'border-white/10' : 'border-gray-200'}
          `}>
            <h2 className={`text-2xl font-bold mb-4 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <span className="text-3xl">🎮</span>
              {text({
                zh: '能力演示 / Playground',
                en: 'Playground'
              })}
            </h2>
            <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {text({
                zh: '可交互的技术演示和实验场',
                en: 'Interactive technical demonstrations and experiments'
              })}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://weykon.com/wgpu"
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  p-4 rounded-lg transition-all duration-300
                  ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-100 hover:bg-gray-200'}
                `}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🔬</span>
                  <h3 className="font-semibold">WebGPU Demos</h3>
                </div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Rust + WGPU + WebAssembly
                </p>
              </a>
              <a
                href="https://ready-paint-game.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  p-4 rounded-lg transition-all duration-300
                  ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-100 hover:bg-gray-200'}
                `}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">🚀</span>
                  <h3 className="font-semibold">ECS Rendering Engine</h3>
                </div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Entity-Component-System Demo
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* 3. Thinking Feed */}
        <section className="mb-12">
          <div className={`
            backdrop-blur-md rounded-lg p-8 shadow-lg
            ${isDark ? 'bg-black/10' : 'bg-white/10'}
            border ${isDark ? 'border-white/10' : 'border-gray-200'}
          `}>
            <h2 className={`text-2xl font-bold mb-4 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <span className="text-3xl">💭</span>
              {text({
                zh: '思考流 / Thinking Feed',
                en: 'Thinking Feed'
              })}
            </h2>
            <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {text({
                zh: '持续的思考、笔记和知识图谱',
                en: 'Continuous thoughts, notes, and knowledge graphs'
              })}
            </p>
            <a
              href="https://blog.weykon.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold
                transition-all duration-300
                ${isDark
                  ? 'bg-white/10 hover:bg-white/20 text-white'
                  : 'bg-gray-900 hover:bg-gray-800 text-white'
                }
              `}
            >
              {text({
                zh: '访问 Blog →',
                en: 'Visit Blog →'
              })}
            </a>
          </div>
        </section>

        {/* 4. Interface */}
        <section className="mb-12">
          <div className={`
            backdrop-blur-md rounded-lg p-8 shadow-lg
            ${isDark ? 'bg-black/10' : 'bg-white/10'}
            border ${isDark ? 'border-white/10' : 'border-gray-200'}
          `}>
            <h2 className={`text-2xl font-bold mb-4 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <span className="text-3xl">🔌</span>
              {text({
                zh: '对接协议 / Interface',
                en: 'Interface'
              })}
            </h2>
            <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {text({
                zh: '如何与我建立连接',
                en: 'How to connect with me'
              })}
            </p>
            <div className="space-y-3">
              <div className={`p-4 rounded-lg font-mono text-sm ${isDark ? 'bg-white/5' : 'bg-gray-100'}`}>
                <span className="opacity-60">Email:</span>{' '}
                <a href="mailto:weykon@example.com" className="hover:underline">
                  weykon@example.com
                </a>
              </div>
              <div className={`p-4 rounded-lg font-mono text-sm ${isDark ? 'bg-white/5' : 'bg-gray-100'}`}>
                <span className="opacity-60">GitHub:</span>{' '}
                <a href="https://github.com/weykon" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  github.com/weykon
                </a>
              </div>
              <div className={`p-4 rounded-lg font-mono text-sm ${isDark ? 'bg-white/5' : 'bg-gray-100'}`}>
                <span className="opacity-60">X/Twitter:</span>{' '}
                <a href="https://x.com/weykon" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  @weykon
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Proof of Work */}
        <section className="mb-12">
          <div className={`
            backdrop-blur-md rounded-lg p-8 shadow-lg
            ${isDark ? 'bg-black/10' : 'bg-white/10'}
            border ${isDark ? 'border-white/10' : 'border-gray-200'}
          `}>
            <h2 className={`text-2xl font-bold mb-4 flex items-center gap-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <span className="text-3xl">✓</span>
              {text({
                zh: '可验证的工作证明',
                en: 'Proof of Work'
              })}
            </h2>
            <p className={`mb-6 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {text({
                zh: '公开可验证的项目、代码和贡献',
                en: 'Publicly verifiable projects, code, and contributions'
              })}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a
                href="https://github.com/weykon"
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  p-4 rounded-lg text-center transition-all duration-300
                  ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-100 hover:bg-gray-200'}
                `}
              >
                <div className="text-2xl mb-2">⭐</div>
                <h3 className="font-semibold mb-1">GitHub</h3>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Open Source Projects
                </p>
              </a>
              <a
                href="https://weykon.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  p-4 rounded-lg text-center transition-all duration-300
                  ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-100 hover:bg-gray-200'}
                `}
              >
                <div className="text-2xl mb-2">🌐</div>
                <h3 className="font-semibold mb-1">Main Site</h3>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  weykon.com
                </p>
              </a>
              <a
                href="https://asymptai.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  p-4 rounded-lg text-center transition-all duration-300
                  ${isDark ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-100 hover:bg-gray-200'}
                `}
              >
                <div className="text-2xl mb-2">🤖</div>
                <h3 className="font-semibold mb-1">Asympt AI</h3>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Agent-Hand Product
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`text-center py-8 text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
          <p>© 2026 Weykon · ai.weykon.com</p>
        </footer>
      </div>
    </div>
  );
}

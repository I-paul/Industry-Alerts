export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
      
      

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        
        <div className="text-center space-y-8">
          
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gray-600"></div>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gray-600"></div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-300 text-sm font-medium">
              © {currentYear} Frost & Sullivan. All rights reserved.
            </p>
            
            <div className="flex justify-center items-center space-x-1">
              <a 
                href="https://www.frost.com/privacy-notice/" 
                className="group relative px-4 py-2 text-gray-400 hover:text-white text-sm font-medium transition-all duration-300 ease-out transform hover:-translate-y-0.5"
              >
                <span className="relative z-10">Privacy Policy</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <div className="w-px h-4 bg-gray-600 mx-2"></div>
              
              <a 
                href="https://www.frost.com/disclaimer/" 
                className="group relative px-4 py-2 text-gray-400 hover:text-white text-sm font-medium transition-all duration-300 ease-out transform hover:-translate-y-0.5"
              >
                <span className="relative z-10">Disclaimer</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>

          {/* Social proof or additional info */}
          <div className="pt-4 border-t border-gray-800">
            <p className="text-gray-500 text-xs">
              The newsletter contains curated content on market, competitive, technological, products/services, customer, regulatory and strategic trends drawn from multiple media sources by our analyst team.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
    </footer>
  );
}
import { useAuth } from './AuthProvider';

export default function LoginScreen() {
  const { signInWithGoogle } = useAuth();

  return (
    <div className="login-screen">
      {/* Word Cloud of Topics */}
      <div className="word-cloud-container">
        {/* Data Structures & Algorithms */}
        <span className="word-cloud-item size-xl" style={{ top: '10%', left: '15%', animationDelay: '0s' }}>Arrays</span>
        <span className="word-cloud-item size-lg" style={{ top: '15%', left: '70%', animationDelay: '0.5s' }}>Hashing</span>
        <span className="word-cloud-item size-md" style={{ top: '25%', left: '40%', animationDelay: '1s' }}>Two Pointers</span>
        <span className="word-cloud-item size-xl" style={{ top: '20%', left: '85%', animationDelay: '1.5s' }}>Sliding Window</span>
        <span className="word-cloud-item size-lg" style={{ top: '35%', left: '10%', animationDelay: '2s' }}>Stack</span>
        <span className="word-cloud-item size-md" style={{ top: '40%', left: '60%', animationDelay: '2.5s' }}>Binary Search</span>
        <span className="word-cloud-item size-xl" style={{ top: '45%', left: '30%', animationDelay: '3s' }}>Linked List</span>
        <span className="word-cloud-item size-lg" style={{ top: '50%', left: '80%', animationDelay: '3.5s' }}>Trees</span>
        <span className="word-cloud-item size-md" style={{ top: '55%', left: '5%', animationDelay: '4s' }}>Heap</span>
        <span className="word-cloud-item size-xl" style={{ top: '60%', left: '50%', animationDelay: '4.5s' }}>Graphs</span>
        <span className="word-cloud-item size-lg" style={{ top: '65%', left: '25%', animationDelay: '5s' }}>Dynamic Programming</span>
        <span className="word-cloud-item size-md" style={{ top: '70%', left: '75%', animationDelay: '5.5s' }}>Tries</span>
        <span className="word-cloud-item size-sm" style={{ top: '75%', left: '45%', animationDelay: '6s' }}>Backtracking</span>
        
        {/* System Design */}
        <span className="word-cloud-item size-lg" style={{ top: '12%', left: '50%', animationDelay: '0.8s' }}>Scalability</span>
        <span className="word-cloud-item size-md" style={{ top: '28%', left: '20%', animationDelay: '1.3s' }}>Load Balancing</span>
        <span className="word-cloud-item size-sm" style={{ top: '32%', left: '75%', animationDelay: '1.8s' }}>Caching</span>
        <span className="word-cloud-item size-lg" style={{ top: '42%', left: '90%', animationDelay: '2.3s' }}>Microservices</span>
        <span className="word-cloud-item size-md" style={{ top: '48%', left: '15%', animationDelay: '2.8s' }}>CAP Theorem</span>
        <span className="word-cloud-item size-sm" style={{ top: '58%', left: '65%', animationDelay: '3.3s' }}>Sharding</span>
        <span className="word-cloud-item size-lg" style={{ top: '68%', left: '35%', animationDelay: '3.8s' }}>Message Queues</span>
        <span className="word-cloud-item size-md" style={{ top: '78%', left: '60%', animationDelay: '4.3s' }}>CDN</span>
        
        {/* CS Fundamentals */}
        <span className="word-cloud-item size-md" style={{ top: '8%', left: '35%', animationDelay: '1.2s' }}>Networking</span>
        <span className="word-cloud-item size-sm" style={{ top: '18%', left: '55%', animationDelay: '1.7s' }}>TCP/IP</span>
        <span className="word-cloud-item size-lg" style={{ top: '30%', left: '85%', animationDelay: '2.2s' }}>Operating Systems</span>
        <span className="word-cloud-item size-md" style={{ top: '38%', left: '45%', animationDelay: '2.7s' }}>Concurrency</span>
        <span className="word-cloud-item size-sm" style={{ top: '52%', left: '22%', animationDelay: '3.2s' }}>Threads</span>
        <span className="word-cloud-item size-lg" style={{ top: '62%', left: '70%', animationDelay: '3.7s' }}>Databases</span>
        <span className="word-cloud-item size-md" style={{ top: '72%', left: '12%', animationDelay: '4.2s' }}>REST APIs</span>
        <span className="word-cloud-item size-sm" style={{ top: '82%', left: '80%', animationDelay: '4.7s' }}>Docker</span>
        
        {/* Additional Topics */}
        <span className="word-cloud-item size-md" style={{ top: '22%', left: '8%', animationDelay: '0.3s' }}>Recursion</span>
        <span className="word-cloud-item size-sm" style={{ top: '44%', left: '72%', animationDelay: '0.9s' }}>BFS/DFS</span>
        <span className="word-cloud-item size-lg" style={{ top: '56%', left: '38%', animationDelay: '1.4s' }}>Sorting</span>
        <span className="word-cloud-item size-md" style={{ top: '66%', left: '88%', animationDelay: '1.9s' }}>Greedy</span>
        <span className="word-cloud-item size-sm" style={{ top: '80%', left: '28%', animationDelay: '2.4s' }}>Bit Manipulation</span>
        <span className="word-cloud-item size-lg" style={{ top: '5%', left: '65%', animationDelay: '2.9s' }}>Algorithms</span>
        <span className="word-cloud-item size-md" style={{ top: '85%', left: '50%', animationDelay: '3.4s' }}>Design Patterns</span>
      </div>
      
      <div className="login-container">
        <div className="login-content">
          <h1>90-Day Interview Prep</h1>
          <p className="login-subtitle">Sign in to sync your progress across devices</p>
          
          <div className="login-features">
            <div className="feature-item">
              <span className="feature-icon">☁️</span>
              <span>Cloud sync across devices</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🔒</span>
              <span>Secure data storage</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📱</span>
              <span>Access anywhere</span>
            </div>
          </div>

          <button className="google-signin-button" onClick={signInWithGoogle}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.64 9.20454C17.64 8.56636 17.5827 7.95272 17.4764 7.36363H9V10.845H13.8436C13.635 11.97 13.0009 12.9231 12.0477 13.5613V15.8195H14.9564C16.6582 14.2527 17.64 11.9454 17.64 9.20454Z" fill="#4285F4"/>
              <path d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5613C11.2418 14.1013 10.2109 14.4204 9 14.4204C6.65591 14.4204 4.67182 12.8372 3.96409 10.71H0.957275V13.0418C2.43818 15.9831 5.48182 18 9 18Z" fill="#34A853"/>
              <path d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78409 7.83 3.96409 7.29V4.95818H0.957275C0.347727 6.17318 0 7.54772 0 9C0 10.4523 0.347727 11.8268 0.957275 13.0418L3.96409 10.71Z" fill="#FBBC05"/>
              <path d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z" fill="#EA4335"/>
            </svg>
            Sign in with Google
          </button>

          <p className="login-note">
            Your data will be securely stored in Firebase and synced across all your devices.
          </p>
        </div>
      </div>
    </div>
  );
}

// Made with Bob

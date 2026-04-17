# 90-Day Interview Prep Planner 🚀

A Netflix-themed, interactive web application to track your 90-day DSA and System Design interview preparation journey.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

### 📅 Daily Workspace
- **Problem Cards**: Direct links to NeetCode problems with difficulty badges
- **Video Resources**: Curated video tutorials for each topic
- **Progress Tracking**: Mark problems as watched and completed
- **Checklist**: Track daily tasks completion

### 💪 Motivation
- **Daily Quotes**: Inspirational quotes for each day
- **Progress Stats**: Visual progress tracking (X/90 days completed)
- **Completion Badges**: Green checkmarks for completed days

### 📝 Notes & Code
- **Code Editor**: Save your solutions per day
- **Notes Section**: Document insights and learnings
- **Local Storage**: All data persists in your browser

### 🎯 Smart Organization
- **3 Phases**: Foundation (Days 1-30), System Design (31-60), Advanced (61-90)
- **90 Problems**: Carefully selected from NeetCode roadmap
- **Topic Coverage**: Arrays, Trees, Graphs, DP, and more
- **Calendar View**: Visual overview of all 90 days

## 🎨 Design

- **Netflix Theme**: Dark, sleek interface inspired by Netflix
- **Smooth Animations**: Fade-ins, hover effects, and transitions
- **Responsive**: Works on desktop, tablet, and mobile
- **High Contrast**: Easy on the eyes for long coding sessions

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/interview-prep-planner.git

# Navigate to project
cd interview-prep-planner

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📦 Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

## 🌐 Deploy

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

**Quick Deploy Options:**
- **Vercel** (Recommended): `vercel` - [Guide](./DEPLOYMENT.md#option-1-vercel-recommended---easiest)
- **Netlify**: Drag & drop `dist` folder
- **GitHub Pages**: `npm run deploy`
- **Cloudflare Pages**: Connect GitHub repo

## 📖 How to Use

1. **Start at Day 1**: Click on Day 1 from the calendar
2. **Solve Problems**: Click "Solve Problem" to open NeetCode
3. **Watch Videos**: Click "Watch Video" for tutorials
4. **Track Progress**: Mark problems as watched
5. **Complete Checklist**: Check off tasks as you finish
6. **Save Code**: Write your solutions in the code box
7. **Add Notes**: Document learnings and insights
8. **Mark Complete**: Click "Mark Complete" when done with the day
9. **Navigate**: Use Prev/Next or slider to move between days
10. **Repeat**: Continue for 90 days!

## 🗂️ Project Structure

```
interview-prep-planner/
├── src/
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
│   └── styles.css       # Netflix-themed styles
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.js       # Vite configuration
├── README.md            # This file
└── DEPLOYMENT.md        # Deployment guide
```

## 🎯 Roadmap Coverage

### Phase 1: Foundation (Days 1-30)
- Arrays & Hashing
- Two Pointers
- Sliding Window
- Stack
- Binary Search
- Linked Lists

### Phase 2: System Design (Days 31-60)
- Trees
- Heap / Priority Queue
- Tries
- Graphs
- System Design Topics

### Phase 3: Advanced (Days 61-90)
- Advanced Graphs
- Dynamic Programming
- CS Fundamentals
- Mock Interviews

## 💾 Data Storage

All data is stored locally in your browser using `localStorage`:
- Completed days
- Task completion status
- Daily notes
- Code solutions
- Watched videos
- Calendar filters

**Note**: Data is browser-specific. Use the same browser to maintain progress.

## 🛠️ Tech Stack

- **React 18**: UI framework
- **Vite**: Build tool and dev server
- **CSS3**: Styling with animations
- **LocalStorage**: Data persistence

## 📱 Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📄 License

MIT License - feel free to use this project for your interview prep!

## 🙏 Acknowledgments

- **NeetCode**: For the excellent problem roadmap
- **Striver**: For video tutorials
- **Netflix**: For design inspiration

## 📞 Support

If you find this helpful, give it a ⭐️!

---

**Happy Coding! May you ace your interviews! 💪🎯**

Built with ❤️ for interview preparation
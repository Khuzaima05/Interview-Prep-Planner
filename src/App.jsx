import { useState, useEffect, useMemo } from "react";

const phases = [
  {
    id: 1,
    name: "Phase 1",
    title: "Foundation Building",
    range: "Days 1-30",
    goals: [
      "Master core patterns",
      "Build problem-solving intuition",
      "Establish daily coding habit"
    ]
  },
  {
    id: 2,
    name: "Phase 2",
    title: "System Design Introduction",
    range: "Days 31-60",
    goals: [
      "Continue DSA practice",
      "Learn system design fundamentals",
      "Study scalability concepts"
    ]
  },
  {
    id: 3,
    name: "Phase 3",
    title: "Advanced Topics & Review",
    range: "Days 61-90",
    goals: [
      "Tackle harder problems",
      "Review CS fundamentals",
      "Mock interviews and revision"
    ]
  }
];

const systemDesignTopics = [
  "Scalability basics",
  "Load balancing",
  "Caching strategies",
  "Database sharding",
  "CAP theorem",
  "Microservices",
  "Message queues",
  "CDN concepts",
  "API design",
  "Rate limiting",
  "Consistent hashing",
  "Database replication",
  "Horizontal vs vertical scaling",
  "NoSQL vs SQL",
  "System design case study 1",
  "System design case study 2",
  "Distributed systems",
  "Monitoring and logging",
  "Security basics",
  "Data partitioning",
  "Event-driven architecture",
  "Service discovery",
  "Circuit breakers",
  "Idempotency",
  "Eventual consistency",
  "ACID properties",
  "Distributed transactions",
  "Consensus algorithms",
  "System design mock interview",
  "Review and practice"
];

const fundamentalsTopics = [
  "OS basics",
  "Networking fundamentals",
  "TCP/IP",
  "HTTP/HTTPS",
  "DNS",
  "Memory management",
  "Process vs threads",
  "Concurrency",
  "Deadlocks",
  "Virtual memory",
  "File systems",
  "Sockets",
  "REST APIs",
  "Authentication",
  "Authorization",
  "Encryption basics",
  "Git workflows",
  "CI/CD basics",
  "Docker intro",
  "Kubernetes basics",
  "Cloud computing",
  "AWS services overview",
  "Testing strategies",
  "Code review best practices",
  "Agile methodologies",
  "Design patterns",
  "SOLID principles",
  "Refactoring techniques",
  "Mock interview prep",
  "Final review"
];

const motivationalQuotes = [
  { day: 1, quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { day: 2, quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { day: 3, quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { day: 4, quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { day: 5, quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { day: 6, quote: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
  { day: 7, quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
  { day: 8, quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { day: 9, quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
  { day: 10, quote: "In a world where you can be anything, be kind.", author: "Wonder" },
  { day: 11, quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
  { day: 12, quote: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
  { day: 13, quote: "If life were predictable it would cease to be life, and be without flavor.", author: "Eleanor Roosevelt" },
  { day: 14, quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { day: 15, quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { day: 16, quote: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
  { day: 17, quote: "You learn more from failure than from success. Don't let it stop you.", author: "Unknown" },
  { day: 18, quote: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
  { day: 19, quote: "Failure will never overtake me if my determination to succeed is strong enough.", author: "Og Mandino" },
  { day: 20, quote: "We may encounter many defeats but we must not be defeated.", author: "Maya Angelou" },
  { day: 21, quote: "Knowing is not enough; we must apply. Wishing is not enough; we must do.", author: "Johann Wolfgang Von Goethe" },
  { day: 22, quote: "Imagine your life is perfect in every respect; what would it look like?", author: "Brian Tracy" },
  { day: 23, quote: "We generate fears while we sit. We overcome them by action.", author: "Dr. Henry Link" },
  { day: 24, quote: "Whether you think you can or think you can't, you're right.", author: "Henry Ford" },
  { day: 25, quote: "Security is mostly a superstition. Life is either a daring adventure or nothing.", author: "Helen Keller" },
  { day: 26, quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
  { day: 27, quote: "Creativity is intelligence having fun.", author: "Albert Einstein" },
  { day: 28, quote: "What you lack in talent can be made up with desire, hustle and giving 110% all the time.", author: "Don Zimmer" },
  { day: 29, quote: "Do what you can with all you have, wherever you are.", author: "Theodore Roosevelt" },
  { day: 30, quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { day: 31, quote: "Try to be a rainbow in someone else's cloud.", author: "Maya Angelou" },
  { day: 32, quote: "You do not find the happy life. You make it.", author: "Camilla Eyring Kimball" },
  { day: 33, quote: "Inspiration does exist, but it must find you working.", author: "Pablo Picasso" },
  { day: 34, quote: "Don't settle for what life gives you; make life better and build something.", author: "Ashton Kutcher" },
  { day: 35, quote: "Everything has beauty, but not everyone can see.", author: "Confucius" },
  { day: 36, quote: "How wonderful it is that nobody need wait a single moment before starting to improve the world.", author: "Anne Frank" },
  { day: 37, quote: "When I let go of what I am, I become what I might be.", author: "Lao Tzu" },
  { day: 38, quote: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.", author: "Maya Angelou" },
  { day: 39, quote: "Change your thoughts and you change your world.", author: "Norman Vincent Peale" },
  { day: 40, quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { day: 41, quote: "If you can dream it, you can achieve it.", author: "Zig Ziglar" },
  { day: 42, quote: "The answer is always no if you don't ask.", author: "Nora Roberts" },
  { day: 43, quote: "I have learned over the years that when one's mind is made up, this diminishes fear.", author: "Rosa Parks" },
  { day: 44, quote: "I alone cannot change the world, but I can cast a stone across the water to create many ripples.", author: "Mother Teresa" },
  { day: 45, quote: "Nothing is impossible. The word itself says 'I'm possible!'", author: "Audrey Hepburn" },
  { day: 46, quote: "The question isn't who is going to let me; it's who is going to stop me.", author: "Ayn Rand" },
  { day: 47, quote: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
  { day: 48, quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { day: 49, quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.", author: "Maya Angelou" },
  { day: 50, quote: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
  { day: 51, quote: "An unexamined life is not worth living.", author: "Socrates" },
  { day: 52, quote: "Eighty percent of success is showing up.", author: "Woody Allen" },
  { day: 53, quote: "Your time is limited, so don't waste it living someone else's life.", author: "Steve Jobs" },
  { day: 54, quote: "Winning isn't everything, but wanting to win is.", author: "Vince Lombardi" },
  { day: 55, quote: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen Covey" },
  { day: 56, quote: "Every child is an artist. The problem is how to remain an artist once he grows up.", author: "Pablo Picasso" },
  { day: 57, quote: "You can never cross the ocean until you have the courage to lose sight of the shore.", author: "Christopher Columbus" },
  { day: 58, quote: "I've learned that people will forget what you said, but they will never forget how you made them feel.", author: "Maya Angelou" },
  { day: 59, quote: "Either you run the day, or the day runs you.", author: "Jim Rohn" },
  { day: 60, quote: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
  { day: 61, quote: "The two most important days in your life are the day you are born and the day you find out why.", author: "Mark Twain" },
  { day: 62, quote: "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.", author: "Johann Wolfgang von Goethe" },
  { day: 63, quote: "The best revenge is massive success.", author: "Frank Sinatra" },
  { day: 64, quote: "People often say that motivation doesn't last. Well, neither does bathing. That's why we recommend it daily.", author: "Zig Ziglar" },
  { day: 65, quote: "Life shrinks or expands in proportion to one's courage.", author: "Anais Nin" },
  { day: 66, quote: "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced.", author: "Vincent Van Gogh" },
  { day: 67, quote: "There is only one way to avoid criticism: do nothing, say nothing, and be nothing.", author: "Aristotle" },
  { day: 68, quote: "Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.", author: "Jesus" },
  { day: 69, quote: "The only person you are destined to become is the person you decide to be.", author: "Ralph Waldo Emerson" },
  { day: 70, quote: "Go confidently in the direction of your dreams. Live the life you have imagined.", author: "Henry David Thoreau" },
  { day: 71, quote: "When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.", author: "Erma Bombeck" },
  { day: 72, quote: "Few things can help an individual more than to place responsibility on him, and to let him know that you trust him.", author: "Booker T. Washington" },
  { day: 73, quote: "Certain things catch your eye, but pursue only those that capture the heart.", author: "Ancient Indian Proverb" },
  { day: 74, quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { day: 75, quote: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
  { day: 76, quote: "We can easily forgive a child who is afraid of the dark; the real tragedy of life is when men are afraid of the light.", author: "Plato" },
  { day: 77, quote: "Teach thy tongue to say, 'I do not know,' and thous shalt progress.", author: "Maimonides" },
  { day: 78, quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
  { day: 79, quote: "When I was 5 years old, my mother always told me that happiness was the key to life. When I went to school, they asked me what I wanted to be when I grew up. I wrote down 'happy'. They told me I didn't understand the assignment, and I told them they didn't understand life.", author: "John Lennon" },
  { day: 80, quote: "Fall seven times and stand up eight.", author: "Japanese Proverb" },
  { day: 81, quote: "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.", author: "Helen Keller" },
  { day: 82, quote: "Everything has beauty, but not everyone can see.", author: "Confucius" },
  { day: 83, quote: "How wonderful it is that nobody need wait a single moment before starting to improve the world.", author: "Anne Frank" },
  { day: 84, quote: "When I let go of what I am, I become what I might be.", author: "Lao Tzu" },
  { day: 85, quote: "Life is not measured by the number of breaths we take, but by the moments that take our breath away.", author: "Maya Angelou" },
  { day: 86, quote: "Happiness is not something readymade. It comes from your own actions.", author: "Dalai Lama" },
  { day: 87, quote: "If you're offered a seat on a rocket ship, don't ask what seat! Just get on.", author: "Sheryl Sandberg" },
  { day: 88, quote: "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.", author: "Aristotle" },
  { day: 89, quote: "If the wind will not serve, take to the oars.", author: "Latin Proverb" },
  { day: 90, quote: "You can't fall if you don't climb. But there's no joy in living your whole life on the ground.", author: "Unknown" }
];

const topicVideoSuggestions = {
  "Arrays & Hashing": {
    title: "Arrays & Hashing - Complete Guide",
    url: "https://www.youtube.com/watch?v=KLlXCFG5TnA",
    reason: "Foundation for understanding hash maps, sets, and array manipulation techniques."
  },
  "Two Pointers": {
    title: "Two Pointers Technique Explained",
    url: "https://www.youtube.com/watch?v=On03HWe2tZM",
    reason: "Master the two-pointer pattern for array and string problems."
  },
  "Sliding Window": {
    title: "Sliding Window Technique",
    url: "https://www.youtube.com/watch?v=jM2dhDPYMQM",
    reason: "Essential pattern for substring and subarray problems with optimal time complexity."
  },
  "Stack": {
    title: "Stack Data Structure & Problems",
    url: "https://www.youtube.com/watch?v=I37kGX-nZEI",
    reason: "Learn stack operations and common patterns like monotonic stack."
  },
  "Binary Search": {
    title: "Binary Search Algorithm",
    url: "https://www.youtube.com/watch?v=f6UU7V3szVw",
    reason: "Master binary search for sorted arrays and search space reduction."
  },
  "Linked List": {
    title: "Linked List Problems & Patterns",
    url: "https://www.youtube.com/watch?v=Nq7ok-OyEpg",
    reason: "Understand pointer manipulation and common linked list patterns."
  },
  "Trees": {
    title: "Binary Tree Algorithms",
    url: "https://www.youtube.com/watch?v=fAAZixBzIAI",
    reason: "Learn tree traversals, recursion, and common tree patterns."
  },
  "Heap / Priority Queue": {
    title: "Heap Data Structure Explained",
    url: "https://www.youtube.com/watch?v=HqPJF2L5h9U",
    reason: "Understand heap operations and priority queue applications."
  },
  "Tries": {
    title: "Trie Data Structure",
    url: "https://www.youtube.com/watch?v=AXjmTQ8LEoI",
    reason: "Learn prefix tree implementation for string search problems."
  },
  "Graphs": {
    title: "Graph Algorithms - BFS & DFS",
    url: "https://www.youtube.com/watch?v=tWVWeAqZ0WU",
    reason: "Master graph traversal techniques and common graph patterns."
  },
  "Advanced Graphs": {
    title: "Advanced Graph Algorithms",
    url: "https://www.youtube.com/watch?v=EaphyqKU4PQ",
    reason: "Learn Dijkstra's, MST, and advanced graph algorithms."
  },
  "1-D Dynamic Programming": {
    title: "Dynamic Programming Patterns",
    url: "https://www.youtube.com/watch?v=oBt53YbR9Kk",
    reason: "Best entry point for recurrence thinking before climbing stairs, house robber, and other 1D DP patterns."
  }
};

const problemBank = [
  { day: 1, title: "Contains Duplicate", topic: "Arrays & Hashing", difficulty: "Easy", slug: "duplicate-integer" },
  { day: 2, title: "Valid Anagram", topic: "Arrays & Hashing", difficulty: "Easy", slug: "is-anagram" },
  { day: 3, title: "Two Sum", topic: "Arrays & Hashing", difficulty: "Easy", slug: "two-integer-sum" },
  { day: 4, title: "Group Anagrams", topic: "Arrays & Hashing", difficulty: "Medium", slug: "anagram-groups" },
  { day: 5, title: "Top K Frequent Elements", topic: "Arrays & Hashing", difficulty: "Medium", slug: "top-k-elements-in-list" },
  { day: 6, title: "Product of Array Except Self", topic: "Arrays & Hashing", difficulty: "Medium", slug: "products-of-array-discluding-self" },
  { day: 7, title: "Valid Sudoku", topic: "Arrays & Hashing", difficulty: "Medium", slug: "validate-sudoku-board" },
  { day: 8, title: "Encode and Decode Strings", topic: "Arrays & Hashing", difficulty: "Medium", slug: "string-encode-and-decode" },
  { day: 9, title: "Longest Consecutive Sequence", topic: "Arrays & Hashing", difficulty: "Medium", slug: "longest-consecutive-sequence" },
  { day: 10, title: "Valid Palindrome", topic: "Two Pointers", difficulty: "Easy", slug: "is-palindrome" },
  { day: 11, title: "Two Sum II - Input Array Is Sorted", topic: "Two Pointers", difficulty: "Medium", slug: "two-integer-sum-ii" },
  { day: 12, title: "3Sum", topic: "Two Pointers", difficulty: "Medium", slug: "three-integer-sum" },
  { day: 13, title: "Container With Most Water", topic: "Two Pointers", difficulty: "Medium", slug: "max-water-container" },
  { day: 14, title: "Trapping Rain Water", topic: "Two Pointers", difficulty: "Hard", slug: "trapping-rain-water" },
  { day: 15, title: "Best Time to Buy and Sell Stock", topic: "Sliding Window", difficulty: "Easy", slug: "buy-and-sell-crypto" },
  { day: 16, title: "Longest Substring Without Repeating Characters", topic: "Sliding Window", difficulty: "Medium", slug: "longest-substring-without-duplicates" },
  { day: 17, title: "Longest Repeating Character Replacement", topic: "Sliding Window", difficulty: "Medium", slug: "longest-repeating-substring-with-replacement" },
  { day: 18, title: "Permutation in String", topic: "Sliding Window", difficulty: "Medium", slug: "permutation-string" },
  { day: 19, title: "Minimum Window Substring", topic: "Sliding Window", difficulty: "Hard", slug: "minimum-window-with-characters" },
  { day: 20, title: "Sliding Window Maximum", topic: "Sliding Window", difficulty: "Hard", slug: "sliding-window-maximum" },
  { day: 21, title: "Valid Parentheses", topic: "Stack", difficulty: "Easy", slug: "validate-parentheses" },
  { day: 22, title: "Min Stack", topic: "Stack", difficulty: "Medium", slug: "minimum-stack" },
  { day: 23, title: "Evaluate Reverse Polish Notation", topic: "Stack", difficulty: "Medium", slug: "reverse-polish-notation" },
  { day: 24, title: "Generate Parentheses", topic: "Stack", difficulty: "Medium", slug: "generate-parentheses" },
  { day: 25, title: "Daily Temperatures", topic: "Stack", difficulty: "Medium", slug: "daily-temperatures" },
  { day: 26, title: "Car Fleet", topic: "Stack", difficulty: "Medium", slug: "car-fleet" },
  { day: 27, title: "Binary Search", topic: "Binary Search", difficulty: "Easy", slug: "binary-search" },
  { day: 28, title: "Search a 2D Matrix", topic: "Binary Search", difficulty: "Medium", slug: "search-2d-matrix" },
  { day: 29, title: "Koko Eating Bananas", topic: "Binary Search", difficulty: "Medium", slug: "eating-bananas" },
  { day: 30, title: "Find Minimum in Rotated Sorted Array", topic: "Binary Search", difficulty: "Medium", slug: "minimum-in-rotated-sorted-array" },
  { day: 31, title: "Search in Rotated Sorted Array", topic: "Binary Search", difficulty: "Medium", slug: "find-target-in-rotated-sorted-array" },
  { day: 32, title: "Time Based Key-Value Store", topic: "Binary Search", difficulty: "Medium", slug: "time-based-key-value-store" },
  { day: 33, title: "Median of Two Sorted Arrays", topic: "Binary Search", difficulty: "Hard", slug: "median-of-two-sorted-arrays" },
  { day: 34, title: "Reverse Linked List", topic: "Linked List", difficulty: "Easy", slug: "reverse-a-linked-list" },
  { day: 35, title: "Merge Two Sorted Lists", topic: "Linked List", difficulty: "Easy", slug: "merge-two-sorted-linked-lists" },
  { day: 36, title: "Reorder List", topic: "Linked List", difficulty: "Medium", slug: "reorder-linked-list" },
  { day: 37, title: "Remove Nth Node From End of List", topic: "Linked List", difficulty: "Medium", slug: "remove-node-from-end-of-linked-list" },
  { day: 38, title: "Copy List With Random Pointer", topic: "Linked List", difficulty: "Medium", slug: "copy-linked-list-with-random-pointer" },
  { day: 39, title: "Add Two Numbers", topic: "Linked List", difficulty: "Medium", slug: "add-two-numbers" },
  { day: 40, title: "Linked List Cycle", topic: "Linked List", difficulty: "Easy", slug: "linked-list-cycle-detection" },
  { day: 41, title: "LRU Cache", topic: "Linked List", difficulty: "Medium", slug: "least-recently-used-cache" },
  { day: 42, title: "Merge K Sorted Lists", topic: "Linked List", difficulty: "Hard", slug: "merge-k-sorted-linked-lists" },
  { day: 43, title: "Reverse Nodes in k-Group", topic: "Linked List", difficulty: "Hard", slug: "reverse-nodes-in-k-group" },
  { day: 44, title: "Invert Binary Tree", topic: "Trees", difficulty: "Easy", slug: "invert-a-binary-tree" },
  { day: 45, title: "Maximum Depth of Binary Tree", topic: "Trees", difficulty: "Easy", slug: "depth-of-binary-tree" },
  { day: 46, title: "Diameter of Binary Tree", topic: "Trees", difficulty: "Easy", slug: "binary-tree-diameter" },
  { day: 47, title: "Balanced Binary Tree", topic: "Trees", difficulty: "Easy", slug: "balanced-binary-tree" },
  { day: 48, title: "Same Tree", topic: "Trees", difficulty: "Easy", slug: "same-binary-tree" },
  { day: 49, title: "Subtree of Another Tree", topic: "Trees", difficulty: "Easy", slug: "subtree-of-a-binary-tree" },
  { day: 50, title: "Lowest Common Ancestor of a Binary Search Tree", topic: "Trees", difficulty: "Medium", slug: "lowest-common-ancestor-in-binary-search-tree" },
  { day: 51, title: "Binary Tree Level Order Traversal", topic: "Trees", difficulty: "Medium", slug: "binary-tree-level-order-traversal" },
  { day: 52, title: "Binary Tree Right Side View", topic: "Trees", difficulty: "Medium", slug: "binary-tree-right-side-view" },
  { day: 53, title: "Count Good Nodes in Binary Tree", topic: "Trees", difficulty: "Medium", slug: "count-good-nodes-in-binary-tree" },
  { day: 54, title: "Validate Binary Search Tree", topic: "Trees", difficulty: "Medium", slug: "valid-binary-search-tree" },
  { day: 55, title: "Kth Smallest Element in a BST", topic: "Trees", difficulty: "Medium", slug: "kth-smallest-integer-in-bst" },
  { day: 56, title: "Construct Binary Tree from Preorder and Inorder Traversal", topic: "Trees", difficulty: "Medium", slug: "binary-tree-from-preorder-and-inorder-traversal" },
  { day: 57, title: "Binary Tree Maximum Path Sum", topic: "Trees", difficulty: "Hard", slug: "binary-tree-maximum-path-sum" },
  { day: 58, title: "Serialize and Deserialize Binary Tree", topic: "Trees", difficulty: "Hard", slug: "serialize-and-deserialize-binary-tree" },
  { day: 59, title: "Kth Largest Element in a Stream", topic: "Heap / Priority Queue", difficulty: "Easy", slug: "kth-largest-element-in-a-stream" },
  { day: 60, title: "Last Stone Weight", topic: "Heap / Priority Queue", difficulty: "Easy", slug: "last-stone-weight" },
  { day: 61, title: "K Closest Points to Origin", topic: "Heap / Priority Queue", difficulty: "Medium", slug: "k-closest-points-to-origin" },
  { day: 62, title: "Task Scheduler", topic: "Heap / Priority Queue", difficulty: "Medium", slug: "task-scheduling" },
  { day: 63, title: "Design Twitter", topic: "Heap / Priority Queue", difficulty: "Medium", slug: "design-twitter-feed" },
  { day: 64, title: "Implement Trie (Prefix Tree)", topic: "Tries", difficulty: "Medium", slug: "implement-prefix-tree" },
  { day: 65, title: "Design Add and Search Words Data Structure", topic: "Tries", difficulty: "Medium", slug: "design-word-search-data-structure" },
  { day: 66, title: "Word Search II", topic: "Tries", difficulty: "Hard", slug: "word-search-ii" },
  { day: 67, title: "Number of Islands", topic: "Graphs", difficulty: "Medium", slug: "number-of-islands" },
  { day: 68, title: "Clone Graph", topic: "Graphs", difficulty: "Medium", slug: "clone-graph" },
  { day: 69, title: "Max Area of Island", topic: "Graphs", difficulty: "Medium", slug: "max-area-of-island" },
  { day: 70, title: "Pacific Atlantic Water Flow", topic: "Graphs", difficulty: "Medium", slug: "pacific-atlantic-water-flow" },
  { day: 71, title: "Surrounded Regions", topic: "Graphs", difficulty: "Medium", slug: "surrounded-regions" },
  { day: 72, title: "Rotting Oranges", topic: "Graphs", difficulty: "Medium", slug: "rotting-fruit" },
  { day: 73, title: "Walls and Gates", topic: "Graphs", difficulty: "Medium", slug: "islands-and-treasure" },
  { day: 74, title: "Course Schedule", topic: "Graphs", difficulty: "Medium", slug: "course-schedule" },
  { day: 75, title: "Course Schedule II", topic: "Graphs", difficulty: "Medium", slug: "course-schedule-ii" },
  { day: 76, title: "Redundant Connection", topic: "Graphs", difficulty: "Medium", slug: "redundant-connection" },
  { day: 77, title: "Number of Connected Components in an Undirected Graph", topic: "Graphs", difficulty: "Medium", slug: "number-of-connected-components-in-an-undirected-graph" },
  { day: 78, title: "Graph Valid Tree", topic: "Graphs", difficulty: "Medium", slug: "valid-tree" },
  { day: 79, title: "Word Ladder", topic: "Graphs", difficulty: "Hard", slug: "word-ladder" },
  { day: 80, title: "Reconstruct Itinerary", topic: "Advanced Graphs", difficulty: "Hard", slug: "reconstruct-flight-path" },
  { day: 81, title: "Min Cost to Connect All Points", topic: "Advanced Graphs", difficulty: "Medium", slug: "min-cost-to-connect-points" },
  { day: 82, title: "Network Delay Time", topic: "Advanced Graphs", difficulty: "Medium", slug: "network-delay-time" },
  { day: 83, title: "Swim in Rising Water", topic: "Advanced Graphs", difficulty: "Hard", slug: "swim-in-rising-water" },
  { day: 84, title: "Alien Dictionary", topic: "Advanced Graphs", difficulty: "Hard", slug: "foreign-dictionary" },
  { day: 85, title: "Cheapest Flights Within K Stops", topic: "Advanced Graphs", difficulty: "Medium", slug: "cheapest-flights-within-k-stops" },
  { day: 86, title: "Climbing Stairs", topic: "1-D Dynamic Programming", difficulty: "Easy", slug: "climbing-stairs" },
  { day: 87, title: "Min Cost Climbing Stairs", topic: "1-D Dynamic Programming", difficulty: "Easy", slug: "minimum-cost-climbing-stairs" },
  { day: 88, title: "House Robber", topic: "1-D Dynamic Programming", difficulty: "Medium", slug: "house-robber" },
  { day: 89, title: "House Robber II", topic: "1-D Dynamic Programming", difficulty: "Medium", slug: "house-robber-ii" },
  { day: 90, title: "Longest Palindromic Substring", topic: "1-D Dynamic Programming", difficulty: "Medium", slug: "longest-palindromic-substring" }
];

const storageKeys = {
  day: "prep-planner-day",
  completed: "prep-planner-completed",
  notesByDay: "prep-planner-notes-by-day",
  codeByDay: "prep-planner-code-by-day",
  watchedResources: "prep-planner-watched-resources",
  calendarFilter: "prep-planner-calendar-filter",
  completedDays: "prep-planner-completed-days"
};

function getPhaseForDay(day) {
  if (day <= 30) return phases[0];
  if (day <= 60) return phases[1];
  return phases[2];
}

function getQuoteForDay(day) {
  return motivationalQuotes.find(q => q.day === day) || motivationalQuotes[0];
}

function getMonthFilterOptions() {
  return [
    { id: "all", label: "All 90 Days", start: 1, end: 90 },
    { id: "month-1", label: "Month 1", start: 1, end: 30 },
    { id: "month-2", label: "Month 2", start: 31, end: 60 },
    { id: "month-3", label: "Month 3", start: 61, end: 90 }
  ];
}

function getDifficultyClass(difficulty) {
  return difficulty.toLowerCase().replace(/\s+/g, "-");
}

function getProblemUrl(slug) {
  return `https://neetcode.io/problems/${slug}/question`;
}

function getSuggestedVideoForProblem(problem) {
  return topicVideoSuggestions[problem.topic] || null;
}

function findCompanionProblem(primaryProblem, problemList) {
  if (primaryProblem.difficulty === "Hard") {
    return null;
  }

  const preferredDifficulty = primaryProblem.difficulty === "Easy" ? "Medium" : "Easy";
  const sameTopicMatch = problemList.find(
    (candidate) =>
      candidate.day !== primaryProblem.day &&
      candidate.topic === primaryProblem.topic &&
      candidate.difficulty === preferredDifficulty
  );

  if (sameTopicMatch) {
    return sameTopicMatch;
  }

  return (
    problemList.find(
      (candidate) =>
        candidate.day !== primaryProblem.day && candidate.difficulty === preferredDifficulty
    ) || null
  );
}

function buildDailyPlans(problemList) {
  return problemList.map((problem) => {
    const companionProblem = findCompanionProblem(problem, problemList);
    const problems = companionProblem ? [problem, companionProblem] : [problem];
    const difficultyLabel =
      problems.length === 1 ? "1 Hard" : `${problems[0].difficulty} + ${problems[1].difficulty}`;
    const topicsSummary =
      problems.length === 1
        ? problems[0].topic
        : `${problems[0].topic} + ${problems[1].topic}`;

    return {
      day: problem.day,
      problems,
      primaryProblem: problem,
      difficultyLabel,
      topicsSummary
    };
  });
}

function getDayNote(notesByDay, day) {
  return notesByDay[String(day)] || "";
}

function getDayCode(codeByDay, day) {
  return codeByDay[String(day)] || "";
}

function parseHashDay(hash) {
  const match = hash.match(/#\/day\/(\d+)/);
  const parsed = match ? Number(match[1]) : null;
  return parsed && parsed >= 1 && parsed <= 90 ? parsed : null;
}

function getViewFromHash(hash) {
  return parseHashDay(hash) ? "day" : "overview";
}

export default function App({ initialData, onDataChange }) {
  const initialHashDay = parseHashDay(window.location.hash);
  const [day, setDay] = useState(() => initialHashDay || initialData?.day || 1);
  const [view, setView] = useState(() => getViewFromHash(window.location.hash));
  const [completed, setCompleted] = useState(initialData?.completed || {});
  const [notesByDay, setNotesByDay] = useState(initialData?.notesByDay || {});
  const [codeByDay, setCodeByDay] = useState(initialData?.codeByDay || {});
  const [watchedResources, setWatchedResources] = useState(initialData?.watchedResources || {});
  const [calendarFilter, setCalendarFilter] = useState(initialData?.calendarFilter || "all");
  const [completedDays, setCompletedDays] = useState(initialData?.completedDays || {});
  const dailyPlans = useMemo(() => buildDailyPlans(problemBank), []);

  const selectedDayPlan = useMemo(
    () => dailyPlans.find((item) => item.day === day) || dailyPlans[0],
    [dailyPlans, day]
  );
  const selectedPhase = useMemo(() => getPhaseForDay(day), [day]);
  const currentQuote = useMemo(() => getQuoteForDay(day), [day]);
  const tasksForDay = useMemo(
    () => selectedDayPlan.problems.map((problem) => problem.title),
    [selectedDayPlan]
  );
  const currentDayNote = getDayNote(notesByDay, day);
  const currentDayCode = getDayCode(codeByDay, day);
  const completedToday = tasksForDay.filter((task) => completed[`${day}-${task}`]).length;
  const dailyProgress = Math.round((completedToday / tasksForDay.length) * 100);
  const totalCompletedTasks = Object.values(completed).filter(Boolean).length;
  const totalPossibleTasks = dailyPlans.length * 3;
  const totalNotes = Object.values(notesByDay).filter((value) => value.trim()).length;
  const totalCodeDrafts = Object.values(codeByDay).filter((value) => value.trim()).length;
  const totalCompletedDays = Object.keys(completedDays).filter(key => completedDays[key]).length;
  const isDayComplete = completedDays[day] || false;
  const monthOptions = getMonthFilterOptions();
  const activeFilter = monthOptions.find((item) => item.id === calendarFilter) || monthOptions[0];
  const filteredDays = dailyPlans.filter(
    (item) => item.day >= activeFilter.start && item.day <= activeFilter.end
  );
  const systemDesignTopic = day >= 31 && day <= 60 ? systemDesignTopics[day - 31] : null;
  const fundamentalsTopic = day >= 61 && day <= 90 ? fundamentalsTopics[day - 61] : null;
  const weeklyBucket = Math.ceil(day / 7);
  const problemTitlesSummary = selectedDayPlan.problems.map((problem) => problem.title).join(" + ");
  const resourceRows = useMemo(
    () =>
      selectedDayPlan.problems.map((problem) => ({
        problem,
        video: getSuggestedVideoForProblem(problem)
      })),
    [selectedDayPlan]
  );

  // Save data to Firebase whenever it changes
  useEffect(() => {
    if (onDataChange) {
      const timeoutId = setTimeout(() => {
        onDataChange({
          day,
          completed,
          notesByDay,
          codeByDay,
          watchedResources,
          calendarFilter,
          completedDays
        });
      }, 1000); // Debounce saves by 1 second
      
      return () => clearTimeout(timeoutId);
    }
  }, [day, completed, notesByDay, codeByDay, watchedResources, calendarFilter, completedDays, onDataChange]);

  useEffect(() => {
    function syncRoute() {
      const hashDay = parseHashDay(window.location.hash);
      const nextView = getViewFromHash(window.location.hash);

      if (hashDay) {
        setDay(hashDay);
      }

      setView(nextView);
    }

    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  function goToOverview() {
    window.location.hash = "";
  }

  function goToDay(targetDay) {
    setDay(targetDay);
    window.location.hash = `/day/${targetDay}`;
  }

  function toggleTask(task) {
    const key = `${day}-${task}`;
    setCompleted((current) => ({
      ...current,
      [key]: !current[key]
    }));
  }

  function updateCurrentDayNote(value) {
    setNotesByDay((current) => ({
      ...current,
      [String(day)]: value
    }));
  }

  function clearCurrentDayNote() {
    setNotesByDay((current) => {
      const updated = { ...current };
      delete updated[String(day)];
      return updated;
    });
  }

  function updateCurrentDayCode(value) {
    setCodeByDay((current) => ({
      ...current,
      [String(day)]: value
    }));
  }

  function clearCurrentDayCode() {
    setCodeByDay((current) => {
      const updated = { ...current };
      delete updated[String(day)];
      return updated;
    });
  }

  function resetTodayTasks() {
    setCompleted((current) => {
      const updated = { ...current };
      tasksForDay.forEach((task) => {
        delete updated[`${day}-${task}`];
      });
      return updated;
    });
  }

  function toggleDayCompletion() {
    setCompletedDays((current) => ({
      ...current,
      [day]: !current[day]
    }));
  }

  function toggleWatchedResource(problemTitle) {
    const key = `${day}-${problemTitle}`;
    setWatchedResources((current) => ({
      ...current,
      [key]: !current[key]
    }));
  }

  if (view === "day") {
    return (
      <div className="app-shell">
        <header className="hero detail-hero">
          <div className="hero-copy-block">
            <p className="eyebrow">Day Workspace</p>
            <h1>Day {day}</h1>
            <p className="hero-copy">
              Work on one day at a time with direct problem links, a mixed problem set, checklist, code box, and notes.
            </p>
            <p className="interaction-hint">
              Click a problem card to open NeetCode. Click a checklist row to mark it done.
            </p>
            <div className="tag-row">
              <span className="tag">{selectedPhase.name}</span>
              <span className="tag">{selectedDayPlan.topicsSummary}</span>
              <span className={`difficulty-pill ${getDifficultyClass(selectedDayPlan.primaryProblem.difficulty)}`}>
                {selectedDayPlan.difficultyLabel}
              </span>
            </div>
          </div>

          <div className="hero-stats">
            <StatCard label="Problems today" value={`${selectedDayPlan.problems.length}`} detail={selectedPhase.title} />
            <StatCard label="Progress" value={`${dailyProgress}%`} detail={`${completedToday}/${tasksForDay.length} tasks complete`} />
            <StatCard label="Saved note" value={currentDayNote.trim() ? "Yes" : "No"} detail="Local browser storage" />
            <StatCard label="Saved code" value={currentDayCode.trim() ? "Yes" : "No"} detail="Per-day local draft" />
          </div>
        </header>

        <main className="simple-layout">
          {/* Section 1: Today's Work - Problems, Videos & Checklist */}
          <section className="panel unified-panel">
            <div className="panel-header">
              <div>
                <p className="section-label">Day {day} Workspace</p>
                <h2>{problemTitlesSummary}</h2>
                <p className="muted">{selectedDayPlan.topicsSummary} | {selectedPhase.range}</p>
                <div className="quote-inline">
                  <p className="quote-text-small">"{currentQuote.quote}"</p>
                  <p className="quote-author-small">— {currentQuote.author}</p>
                </div>
              </div>
              <div className="action-row">
                <button className="ghost-button" onClick={goToOverview}>← Back</button>
                <button
                  className={`day-completion-button-compact ${isDayComplete ? 'completed' : ''}`}
                  onClick={toggleDayCompletion}
                >
                  {isDayComplete ? '✓ Complete' : 'Mark Complete'}
                </button>
              </div>
            </div>

            <div className="problem-link-list">
              {selectedDayPlan.problems.map((problem) => {
                const video = getSuggestedVideoForProblem(problem);
                const watchedKey = `${day}-${problem.title}`;
                const watched = Boolean(watchedResources[watchedKey]);
                
                return (
                  <div key={problem.slug} className="problem-card-unified">
                    <div className="problem-card-header">
                      <div>
                        <strong className="problem-title">{problem.title}</strong>
                        <span className="problem-topic">{problem.topic}</span>
                      </div>
                      <span className={`difficulty-pill ${getDifficultyClass(problem.difficulty)}`}>
                        {problem.difficulty}
                      </span>
                    </div>
                    <div className="problem-card-actions">
                      <a
                        className="problem-link-btn"
                        href={getProblemUrl(problem.slug)}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Solve Problem →
                      </a>
                      {video && (
                        <a
                          href={video.url}
                          target="_blank"
                          rel="noreferrer"
                          className="video-link-btn"
                        >
                          Watch Video
                        </a>
                      )}
                      <button
                        className={`watch-toggle ${watched ? "checked" : ""}`}
                        onClick={() => toggleWatchedResource(problem.title)}
                      >
                        {watched ? "✓ Watched" : "Mark Watched"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="checklist-section">
              <div className="checklist-header">
                <h3>Checklist</h3>
                <button className="ghost-button-small" onClick={resetTodayTasks}>Reset</button>
              </div>
              <div className="task-list-compact">
                {tasksForDay.map((task) => {
                  const key = `${day}-${task}`;
                  const isDone = Boolean(completed[key]);
                  return (
                    <button
                      key={task}
                      className={`task-item-compact ${isDone ? "done" : ""}`}
                      onClick={() => toggleTask(task)}
                    >
                      <span className="task-checkbox">{isDone ? "✓" : ""}</span>
                      <span className="task-text">{task}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="panel">
            <div className="panel-header">
              <div>
                <p className="section-label">Checklist</p>
                <h2>What to complete today</h2>
              </div>
              <button className="ghost-button" onClick={resetTodayTasks}>
                Reset today
              </button>
            </div>

            <div className="task-list">
              {tasksForDay.map((task) => {
                const key = `${day}-${task}`;
                const isDone = Boolean(completed[key]);

                return (
                  <button
                    key={task}
                    className={`task-item ${isDone ? "done" : ""}`}
                    onClick={() => toggleTask(task)}
                  >
                    <span className="task-copy">
                      <strong>{task}</strong>
                      <small>{isDone ? "Click to mark as pending again" : "Click this row to mark complete"}</small>
                    </span>
                    <span className="task-badge">{isDone ? "Done" : "Pending"}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Section 2: Navigation & Notes */}
          <section className="panel unified-panel">
            <div className="navigation-section">
              <h3>Navigate Days</h3>
              <div className="day-controls-compact">
                <button className="nav-button" onClick={() => goToDay(Math.max(1, day - 1))}>
                  ← Prev
                </button>
                <input
                  className="day-slider"
                  type="range"
                  min="1"
                  max="90"
                  value={day}
                  onChange={(event) => goToDay(Number(event.target.value))}
                />
                <span className="day-indicator">Day {day}/90</span>
                <button className="nav-button" onClick={() => goToDay(Math.min(90, day + 1))}>
                  Next →
                </button>
              </div>
            </div>

            <div className="notes-code-section">
              <div className="notes-code-tabs">
                <div className="tab-content">
                  <div className="tab-header">
                    <h3>Code & Notes</h3>
                    <div className="tab-actions">
                      <button className="ghost-button-small" onClick={clearCurrentDayCode}>Clear Code</button>
                      <button className="ghost-button-small" onClick={clearCurrentDayNote}>Clear Notes</button>
                    </div>
                  </div>
                  <textarea
                    className="code-box-compact"
                    value={currentDayCode}
                    onChange={(event) => updateCurrentDayCode(event.target.value)}
                    placeholder={`// Write your solution for Day ${day}`}
                    spellCheck="false"
                  />
                  <textarea
                    className="notes-box-compact"
                    value={currentDayNote}
                    onChange={(event) => updateCurrentDayNote(event.target.value)}
                    placeholder="Notes: Key insights, edge cases, time complexity..."
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="app-shell">
      <header className="hero">
          <div className="hero-copy-block">
            <p className="eyebrow">Interview Planner + NeetCode Schedule</p>
            <h1>90-Day Interview Prep Calendar</h1>
          <p className="hero-copy">
            Click any day to open a dedicated day page with either an Easy + Medium mix or a single Hard problem.
          </p>
          <p className="interaction-hint">
            Click any day card below to open that day’s workspace.
          </p>
          <div className="tag-row">
            <span className="tag">3 phases</span>
            <span className="tag">Easy + Medium or 1 Hard</span>
            <span className="tag">Daily code drafts</span>
          </div>
        </div>

        <div className="hero-stats">
          <StatCard label="Days Completed" value={`${totalCompletedDays}/90`} detail={`${Math.round((totalCompletedDays/90)*100)}% of journey complete`} />
          <StatCard label="Overall tasks" value={`${totalCompletedTasks}/${totalPossibleTasks}`} detail="Saved locally in this browser" />
          <StatCard label="Days with notes" value={`${totalNotes}`} detail="Daily notes stored separately" />
          <StatCard label="Days with code" value={`${totalCodeDrafts}`} detail="Per-day code drafts saved locally" />
        </div>
      </header>

      <main className="layout">
        <section className="panel primary-panel">
          <div className="panel-header">
            <div>
              <p className="section-label">Roadmap overview</p>
              <h2>Pick a day to open its workspace</h2>
              <p className="muted">
                The overview page stays focused on planning. Clicking a day opens a separate day workspace.
              </p>
            </div>
            <div className="filter-row">
              {monthOptions.map((option) => (
                <button
                  key={option.id}
                  className={`chip-button ${calendarFilter === option.id ? "active-chip" : ""}`}
                  onClick={() => setCalendarFilter(option.id)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="calendar-grid">
            {filteredDays.map((item) => {
              const phase = getPhaseForDay(item.day);
              const note = getDayNote(notesByDay, item.day);
              const code = getDayCode(codeByDay, item.day);
              const isDayDone = completedDays[item.day] || false;
              const doneCount = item.problems
                .map((problem) => problem.title)
                .filter(
                (task) => completed[`${item.day}-${task}`]
                ).length;

              return (
                <button
                  key={item.day}
                  className={`calendar-day phase-${phase.id} ${item.day === day ? "selected-day" : ""} ${isDayDone ? "day-completed" : ""}`}
                  onClick={() => goToDay(item.day)}
                >
                  {isDayDone && <span className="completion-badge">✓</span>}
                  <span className="calendar-top">
                    <strong>Day {item.day}</strong>
                    <span className={`difficulty-pill ${getDifficultyClass(item.primaryProblem.difficulty)}`}>
                      {item.difficultyLabel}
                    </span>
                  </span>
                  <span className="calendar-problem">{item.problems.map((problem) => problem.title).join(" + ")}</span>
                  <span className="calendar-topic">{item.topicsSummary}</span>
                  <span className="card-action">Click to open Day {item.day}</span>
                  <span className="calendar-meta">
                    {doneCount}/3 tasks
                    {note.trim() ? " | note" : ""}
                    {code.trim() ? " | code" : ""}
                    {isDayDone ? " | ✓ complete" : ""}
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

function InfoBlock({ title, items }) {
  return (
    <div className="info-block">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function StatCard({ label, value, detail }) {
  return (
    <div className="stat-card">
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{detail}</small>
    </div>
  );
}

import { Calendar, Clock, User, ArrowRight, Search, ChevronRight, Tag, Filter, Bookmark, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { name: "All Categories", count: 26 },
    { name: "Industry Trends", count: 8 },
    { name: "Research", count: 5 },
    { name: "Best Practices", count: 6 },
    { name: "Technology", count: 4 },
    { name: "Ethics", count: 2 },
    { name: "Case Study", count: 3 }
  ];

  const popularTags = [
    "AI", "Machine Learning", "Cost Estimation", "BIM", "Quantity Takeoff", 
    "Construction", "Data Analysis", "Automation", "Predictive Analytics"
  ];

  const featuredArticle = {
    id: 0,
    title: "Predictive Analytics: The Future of Construction Cost Management",
    excerpt: "How AI-powered predictive models are helping quantity surveyors forecast costs with unprecedented accuracy, enabling better decision-making and risk management throughout the project lifecycle.",
    author: "Dr. Sarah Johnson",
    date: "April 14, 2025",
    readTime: "15 min read",
    category: "Featured",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    tags: ["Predictive Analytics", "Risk Management", "Cost Forecasting"]
  };

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Quantity Surveying in the Age of AI",
      excerpt: "Exploring how artificial intelligence is set to transform the quantity surveying profession over the next decade.",
      author: "Dr. Sarah Johnson",
      date: "April 10, 2025",
      readTime: "8 min read",
      category: "Industry Trends",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      tags: ["AI", "Future Trends", "Profession Evolution"]
    },
    {
      id: 2,
      title: "Machine Learning vs. Traditional Cost Estimation: A Comparative Study",
      excerpt: "A detailed analysis comparing AI-powered estimation techniques with traditional methods, including accuracy rates and efficiency metrics.",
      author: "Mark Roberts",
      date: "April 3, 2025",
      readTime: "12 min read",
      category: "Research",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      tags: ["Machine Learning", "Comparative Analysis", "Cost Estimation"]
    },
    {
      id: 3,
      title: "5 Ways AI Is Reducing Cost Overruns in Construction Projects",
      excerpt: "How artificial intelligence is helping quantity surveyors identify potential cost issues before they impact project budgets.",
      author: "Priya Patel",
      date: "March 28, 2025",
      readTime: "6 min read",
      category: "Best Practices",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      tags: ["Cost Overruns", "Project Management", "Budget Control"]
    },
    {
      id: 4,
      title: "Computer Vision in Quantity Takeoff: Beyond the Basics",
      excerpt: "An in-depth look at how advanced computer vision algorithms are revolutionizing the measurement and quantification process.",
      author: "David Chen",
      date: "March 22, 2025",
      readTime: "10 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      tags: ["Computer Vision", "Quantity Takeoff", "Automation"]
    },
    {
      id: 5,
      title: "Ethical Considerations in AI-Powered Quantity Surveying",
      excerpt: "Addressing important questions about bias, transparency, and human oversight in AI-driven cost estimation.",
      author: "Dr. Sarah Johnson",
      date: "March 15, 2025",
      readTime: "9 min read",
      category: "Ethics",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      tags: ["Ethics", "AI Bias", "Transparency"]
    },
    {
      id: 6,
      title: "Case Study: How AI Saved a Major Infrastructure Project $4.2M",
      excerpt: "A detailed breakdown of how AI4QS helped identify cost-saving opportunities in a complex infrastructure development.",
      author: "Mark Roberts",
      date: "March 8, 2025",
      readTime: "7 min read",
      category: "Case Study",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      tags: ["Case Study", "Cost Savings", "Infrastructure"]
    }
  ];

  // Filter posts based on active category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === "All Categories" || post.category === activeCategory;
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/5 to-transparent overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-96 w-96 -top-48 -right-48 rounded-full bg-primary/5 blur-3xl opacity-50"></div>
          <div className="absolute h-96 w-96 -bottom-48 -left-48 rounded-full bg-purple-500/5 blur-3xl opacity-50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Knowledge Center
            </div>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
              AI4QS Blog
            </h1>
            <p className="text-xl text-gray-600">
              Insights, research, and trends at the intersection of AI and quantity surveying
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="relative w-full md:w-auto max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-500 mr-2">Filter by:</span>
              <div className="flex flex-wrap gap-2">
                {categories.slice(0, 4).map((category) => (
                  <Badge
                    key={category.name}
                    variant={activeCategory === category.name ? "default" : "outline"}
                    className={`cursor-pointer ${
                      activeCategory === category.name 
                        ? ""
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveCategory(category.name)}
                  >
                    {category.name} {category.count > 0 && `(${category.count})`}
                  </Badge>
                ))}
                <select 
                  className="text-sm border rounded-md px-2 py-1"
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value)}
                >
                  <option value="">More categories...</option>
                  {categories.slice(4).map(category => (
                    <option key={category.name} value={category.name}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content Area */}
          <div className="lg:w-2/3">
            {/* Featured Article */}
            <div className="mb-16">
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-span-3 h-64 lg:h-auto">
                      <img
                        src={featuredArticle.image}
                        alt={featuredArticle.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8 lg:col-span-2 flex flex-col">
                      <div className="flex items-center mb-3">
                        <Badge className="bg-gradient-to-r from-primary to-purple-500">{featuredArticle.category}</Badge>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 line-clamp-3">
                        {featuredArticle.title}
                      </h2>
                      <p className="text-gray-600 mb-6 flex-grow line-clamp-4">
                        {featuredArticle.excerpt}
                      </p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <div className="flex items-center mr-4">
                          <User className="h-4 w-4 mr-1" />
                          <span>{featuredArticle.author}</span>
                        </div>
                        <div className="flex items-center mr-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span>{featuredArticle.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{featuredArticle.readTime}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 mb-4 flex-wrap">
                        {featuredArticle.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button className="group">
                        Read Article <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Blog Posts Grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-0">
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge>{post.category}</Badge>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-primary transition-colors">
                          <a href="#">{post.title}</a>
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                        <div className="flex items-center text-sm text-gray-500 mb-4">
                          <div className="flex items-center mr-4">
                            <User className="h-4 w-4 mr-1" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">{post.date}</span>
                          <div className="flex gap-2">
                            <button className="text-gray-400 hover:text-primary transition-colors">
                              <Bookmark className="h-4 w-4" />
                            </button>
                            <button className="text-gray-400 hover:text-primary transition-colors">
                              <Share2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <p className="text-gray-600">No articles found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setActiveCategory("All Categories");
                    setSearchQuery("");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled className="w-9 p-0">
                  1
                </Button>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  2
                </Button>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  3
                </Button>
                <span className="flex items-center px-2">...</span>
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  8
                </Button>
                <Button variant="outline" size="sm">
                  Next <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-8">
            {/* Popular Tags */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map(tag => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="cursor-pointer hover:bg-primary/10"
                      onClick={() => setSearchQuery(tag)}
                    >
                      <Tag className="h-3 w-3 mr-1" /> {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Popular Posts */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Articles</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map(post => (
                    <div key={post.id} className="flex gap-3">
                      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-md">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 line-clamp-2 hover:text-primary transition-colors">
                          <a href="#">{post.title}</a>
                        </h4>
                        <div className="flex items-center mt-1">
                          <Clock className="h-3 w-3 text-gray-400 mr-1" />
                          <span className="text-xs text-gray-500">{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="bg-primary/5 border-none">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Subscribe to Our Newsletter</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get the latest articles, research, and trends about AI in quantity surveying delivered straight to your inbox.
                </p>
                <div className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="w-full"
                  />
                  <Button className="w-full">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  By subscribing, you agree to our <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                </p>
              </CardContent>
            </Card>

            {/* Categories List */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <div 
                      key={category.name} 
                      className={`flex justify-between items-center p-2 rounded-md cursor-pointer ${
                        activeCategory === category.name 
                          ? 'bg-primary/10 text-primary' 
                          : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setActiveCategory(category.name)}
                    >
                      <span className="font-medium">{category.name}</span>
                      <Badge variant="secondary" className="bg-gray-100">
                        {category.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <section className="bg-primary bg-gradient-to-br from-primary to-primary-deep relative overflow-hidden py-16">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" viewBox="0 0 800 800">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Updated on AI in Quantity Surveying
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter for the latest insights, research, and trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/30 text-white placeholder:text-white/70"
              />
              <Button variant="secondary" className="bg-white hover:bg-gray-50 text-primary shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;

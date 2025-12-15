import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import Container from '../components/Container';
import SectionTitle from '../components/SectionTitle';
import InternshipCard from '../components/InternshipCard';
import AnimatedSection from '../components/AnimatedSection';
import { internships, categories } from '../data/internships';

const Internships = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // FIXED FILTERING LOGIC
  const filteredInternships = internships.filter((internship) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      internship.title.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      internship.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      internship.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-20 min-h-screen">
      <Container>
        <AnimatedSection>
          <SectionTitle center subtitle="Find your perfect internship opportunity">
            Explore Internships
          </SectionTitle>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mt-12 mb-8">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                placeholder="Search internships or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder-white/40 focus:outline-none focus:border-[#00E0FF]/50 focus:ring-2 focus:ring-[#00E0FF]/20 transition-all"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-white/60 flex-shrink-0" />

            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-xl font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#6C63FF] to-[#00E0FF] text-white shadow-lg shadow-[#6C63FF]/30'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="mb-6 text-white/60">
            Showing{' '}
            <span className="text-[#00E0FF] font-semibold">
              {filteredInternships.length}
            </span>{' '}
            internship{filteredInternships.length !== 1 ? 's' : ''}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInternships.map((internship, index) => (
            <AnimatedSection key={internship.id} delay={0.05 * index}>
              <InternshipCard internship={internship} />
            </AnimatedSection>
          ))}
        </div>

        {filteredInternships.length === 0 && (
          <AnimatedSection delay={0.3}>
            <div className="text-center py-20">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12 max-w-md mx-auto">
                <div className="w-20 h-20 bg-gradient-to-br from-[#6C63FF] to-[#00E0FF] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">No internships found</h3>
                <p className="text-white/60">Try adjusting your search or filters</p>
              </div>
            </div>
          </AnimatedSection>
        )}
      </Container>
    </div>
  );
};

export default Internships;

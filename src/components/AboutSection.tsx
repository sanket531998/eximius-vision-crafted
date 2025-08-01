import { Users, Target, Heart, Headphones } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">ABOUT</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ESS is a software design and development consultancy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
              <Users className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Who We Are?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Experiencing certainty with ESS means you can count on results, partnership and 
              leadership. We are the one you trust to provide you the insight, support and 
              expertise that will propel your business forward.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">What We Do?</h3>
            <p className="text-muted-foreground leading-relaxed">
              We work closely with you to establish a comprehensive understanding of your 
              business, your needs and your goals. We lay out a thorough technical plan of 
              action to ensure your needs are addressed and your goals are accomplished.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
              <Heart className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Why We Do It?</h3>
            <p className="text-muted-foreground leading-relaxed">
              ESS is a results oriented company, with a passion to help our partners and 
              clients in their quest for excellence. We take a long-term view and ensure 
              that any solution we put in place today will efficiently meet your needs 
              while providing the extensibility to carry your business into the future.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-300">
              <Headphones className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4">Support whenever you need!</h3>
            <p className="text-muted-foreground leading-relaxed">
              We can provide you with real help and recommend proper solutions that won't 
              cost the earth. We provide real one to one training and support - support 
              that will be there when you need it, and not when it suits us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
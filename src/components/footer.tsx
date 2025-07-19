import Link from 'next/link';
import { FiGithub, FiInstagram, FiMail } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="py-8 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Faiz Ahmed&apos;s Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              href="https://github.com/faizAhmed10" 
              target="_blank" 
              rel="noopener noreferrer"
              prefetch={false}
              className="text-foreground/80 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="h-5 w-5" />
            </Link>
            <Link 
              href="https://instagram.com/faiz_ahmed017" 
              target="_blank" 
              rel="noopener noreferrer"
              prefetch={false}
              className="text-foreground/80 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <FiInstagram className="h-5 w-5" />
            </Link>
            <Link 
              href="mailto:faizahmed10604@gmail.com" 
              prefetch={false}
              className="text-foreground/80 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <FiMail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
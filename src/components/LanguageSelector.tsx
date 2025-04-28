
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const LanguageSelector = ({ currentLanguage, onLanguageChange }: LanguageSelectorProps) => {
  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ar", name: "العربية", flag: "🇸🇦", rtl: true },
    { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
    { code: "zh", name: "中文", flag: "🇨🇳" },
  ];

  const handleLanguageChange = (langCode: string) => {
    onLanguageChange(langCode);
    
    // Update HTML dir attribute for RTL support
    const isRTL = languages.find(lang => lang.code === langCode)?.rtl;
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
  };

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <span>{currentLang.flag}</span>
          <span>{currentLang.name}</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="lucide lucide-chevron-down"
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem 
            key={language.code}
            className={cn(
              "flex items-center gap-2 cursor-pointer",
              language.code === currentLanguage && "bg-sambow-soft-purple/20"
            )}
            onClick={() => handleLanguageChange(language.code)}
          >
            <span>{language.flag}</span>
            <span className={language.rtl ? "text-right" : ""}>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;

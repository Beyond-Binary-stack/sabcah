import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className={`rounded-2xl border transition-all duration-300 ${
            openIndex === index
              ? 'border-accent-200 bg-accent-50/50 shadow-sm'
              : 'border-navy-200 bg-white hover:border-navy-300'
          }`}
        >
          <button
            onClick={() => toggle(index)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            aria-expanded={openIndex === index}
          >
            <span className={`text-sm font-semibold sm:text-base ${
              openIndex === index ? 'text-accent-600' : 'text-navy-900'
            } transition-colors`}>
              {item.question}
            </span>
            <ChevronDown
              size={20}
              className={`flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180 text-accent-500' : 'text-navy-400'
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-5">
              <p className="text-sm leading-relaxed text-navy-600">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

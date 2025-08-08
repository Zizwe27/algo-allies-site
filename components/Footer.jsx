import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
      <footer className="bg-white border-t border-gray-200 py-8 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-blue-600 text-2xl font-bold italic mb-2">
                Algo Allies
              </h3>
              <p className="text-gray-600 text-sm">
                © 2025 Zizwe Mtonga. All rights reserved.
              </p>
            </div>

            <div className="text-right">
              <div className="flex gap-8 mb-4">
                <a href="#" className="text-gray-700 hover:text-blue-600 transition">Company</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition">Resources</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition">Legal</a>
              </div>
              
              <div className="flex gap-4 justify-end">
                <a href="#" className="text-gray-700 hover:text-blue-600 transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }

export default Footer
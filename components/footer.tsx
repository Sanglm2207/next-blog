import React from 'react';
import config from '@/config';

export const Footer = () => (
  <div className="container mt-5">
    <footer className="bg-white border-top p-3 text-muted small">
      <div className="row align-items-center justify-content-between">
        <div>
          <span className="navbar-brand mr-2">
            <strong>{config.name}</strong>
          </span>
          Copyright &copy; 2025 . All rights reserved.
        </div>
        <div>
          Made with 
          <a
            target="_blank"
            className="font-weight-bold"
            href="#"
            rel="noreferrer"
          >
             Kai Blog 
          </a>
          by
          <a href="https://x.com/@sanglm2207" className="font-weight-bold" target="_blank" rel="noreferrer">
            @kaidev99
          </a>
        </div>
      </div>
    </footer>
  </div>
);

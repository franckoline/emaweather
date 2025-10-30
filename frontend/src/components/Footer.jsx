export default function Footer() {
  return (
    <footer className="bg-sky-600 text-white py-6 mt-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} WeatherApp. All rights reserved.
        </p>

        <div className="flex space-x-4 mt-3 md:mt-0">
          <a
            href="#"
            className="hover:text-sky-200 transition"
            aria-label="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.43.36a9.06 9.06 0 0 1-2.83 1.08A4.52 4.52 0 0 0 16.11 0c-2.5 0-4.52 2-4.52 4.52 0 .35.04.7.12 1.03A12.84 12.84 0 0 1 1.64.89a4.52 4.52 0 0 0 1.4 6.03A4.47 4.47 0 0 1 .96 6v.06c0 2.21 1.57 4.05 3.64 4.47a4.48 4.48 0 0 1-2.04.08 4.53 4.53 0 0 0 4.22 3.13A9.05 9.05 0 0 1 0 19.54a12.79 12.79 0 0 0 6.92 2.03c8.3 0 12.84-6.9 12.84-12.88 0-.2 0-.39-.01-.58A9.22 9.22 0 0 0 23 3z" />
            </svg>
          </a>

          <a
            href="#"
            className="hover:text-sky-200 transition"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.21 11.44c.6.11.82-.26.82-.58v-2.2c-3.34.72-4.04-1.6-4.04-1.6-.55-1.38-1.35-1.75-1.35-1.75-1.1-.76.08-.74.08-.74 1.21.09 1.85 1.24 1.85 1.24 1.08 1.85 2.83 1.32 3.52 1.01.11-.78.43-1.32.78-1.62-2.66-.31-5.46-1.33-5.46-5.93 0-1.31.47-2.39 1.24-3.24-.13-.31-.54-1.56.12-3.25 0 0 1-.32 3.3 1.23A11.52 11.52 0 0 1 12 5.8a11.5 11.5 0 0 1 3 .4c2.3-1.55 3.3-1.23 3.3-1.23.66 1.69.25 2.94.12 3.25.78.85 1.24 1.93 1.24 3.24 0 4.61-2.8 5.61-5.47 5.92.44.38.83 1.11.83 2.24v3.32c0 .32.22.7.82.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12z"
              />
            </svg>
          </a>

          <a
            href="#"
            className="hover:text-sky-200 transition"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C3.33 3.5 2 4.83 2 6.48c0 1.64 1.33 2.98 2.98 2.98A2.98 2.98 0 0 0 8.94 6.5C8.94 4.83 7.62 3.5 4.98 3.5zM2.4 8.91h5.16V21H2.4zM9.83 8.91H15v1.65h.08c.73-1.38 2.51-2.83 5.17-2.83C23.84 7.73 24 10.63 24 14.07V21h-5.16v-6.02c0-1.44-.02-3.3-2.01-3.3-2.02 0-2.33 1.58-2.33 3.2V21H9.83z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

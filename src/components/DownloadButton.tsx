
export default function DownloadButton() {
  return (
    <div className="flex justify-center my-8">
      <a 
        href="https://drive.google.com/file/d/1hRptF7ex5d9Mgm8AiLzmn7-Fo2mRGla_/view?usp=drive_link" 
        className="download-button relative inline-flex items-center justify-center px-12 py-6 rounded-full text-primary font-medium text-lg"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-center">
          <div>DOWNLOAD OUR LATEST CATALOGUE HERE</div>
          <div className="text-2xl font-bold mt-1">2025</div>
        </span>
      </a>
    </div>
  );
}

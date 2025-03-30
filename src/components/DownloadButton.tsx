
export default function DownloadButton() {
  return (
    <div className="flex justify-center my-8">
      <a 
        href="#" 
        className="download-button relative inline-flex items-center justify-center px-12 py-6 rounded-full text-primary font-medium text-lg"
        onClick={(e) => {
          e.preventDefault();
          alert("Catalogue download will be implemented with backend integration");
        }}
      >
        <span className="text-center">
          <div>DOWNLOAD OUR LATEST CATALOGUE HERE</div>
          <div className="text-2xl font-bold mt-1">2025</div>
        </span>
      </a>
    </div>
  );
}

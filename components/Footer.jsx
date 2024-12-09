export default function Footer() {
    return (
      <footer className="bg-[#17414F] text-white py-12 w-full">
        <div className="container mx-auto px-4 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <h3 className="font-semibold text-lg">Phone Number</h3>
              <p className="text-sm">+974 318 1843</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email Address</h3>
              <p className="text-sm">Elbrithcdf@gmail.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Office Location</h3>
              <p className="text-sm">Ambassador Street, Zone 61</p>
            </div>
          </div>
          <p className="text-xs">
            © Elbrit Life Sciences Private Limited. All Rights Reserved.
          </p>
        </div>
      </footer>
    );
  }
  
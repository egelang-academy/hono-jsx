const Profile = () => {
  return (
    <div class="w-full bg-gray-50 h-screen overflow-hidden md:justify-center md:items-center flex">
      <div class="w-full md:w-2/3 lg:w-1/2 overflow-hidden bg-white rounded-lg">
        <div class="flex flex-col md:flex-row gap-3">
          <div class="w-full md:w-[200px] h-[200px] bg-blue-400 flex justify-center items-center text-white">
            PHOTO DISINI
          </div>
          <div class="flex-1 p-4">
            <div class="flex gap-2 flex-col">
              <div>
                <h3 class="text-gray-400">Institusi</h3>
                <p class="text-gray-700">EGELANG ACADEMY</p>
              </div>
              <div>
                <h3 class="text-gray-400">Nama Siswa/Mahasiswa</h3>
                <p class="text-gray-700">BUDI</p>
              </div>
              <div>
                <h3 class="text-gray-400">Alamat</h3>
                <p class="text-gray-700">Jln Kayangan, Blok AI35</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

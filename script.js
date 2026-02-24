
let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

let total = document.getElementById('total');
let inverviewcount = document.getElementById('inverview-count');
let rejectedCount = document.getElementById('rejected-count');
let jobCount = document.getElementById('job-count');

const allBtn = document.getElementById('all-btn');
const interviewBtn = document.getElementById('interview-btn');
const rejectedBtn = document.getElementById('rejected-btn');
const filterSection = document.getElementById('filtered-section');
const deleteBtn = document.getElementById('delete-btn')



const allcardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');


function calculateCounts() {
    total.innerText = allcardSection.children.length;
    jobCount.innerText = allcardSection.children.length
    inverviewcount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCounts();

function toggleStyle(id) {



    
  allBtn.classList.remove('bg-blue-500', 'text-white');
  interviewBtn.classList.remove('bg-blue-500', 'text-white');
  rejectedBtn.classList.remove('bg-blue-500', 'text-white');

  
  allBtn.classList.add('bg-white', 'text-black');
  interviewBtn.classList.add('bg-white', 'text-black');
  rejectedBtn.classList.add('bg-white', 'text-black');

  const select = document.getElementById(id);
  currentStatus = id;

  
  select.classList.remove('bg-white', 'text-black');
  select.classList.add('bg-blue-500', 'text-white');

    if (id === 'interview-btn') {

        allcardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');

        if (!interviewList.length) {
            filterSection.innerHTML = `  <div class="flex flex-col items-center text-center">
        <img class="p-3" src="./image/data.png" alt="">
        <h2 class=" p-3 text-5xl font-bold text-[#002c5c]">No jobs available</h2>
        <p class=" p-3 text-4xl">Check back soon for new job opportunities</p>
    </div>`;
        } else {
            interviewRender();
        }


    } else if (id == 'all-btn') {
        allcardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
        console.log('all');


    } else if (id == 'rejected-btn') {
        allcardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');

        if (!rejectedList.length) {
            filterSection.innerHTML = `  <div class="flex flex-col items-center text-center">
        <img class="p-3" src="./image/data.png" alt="">
        <h2 class=" p-3 text-5xl font-bold text-[#002c5c]">No jobs available</h2>
        <p class=" p-3 text-4xl">Check back soon for new job opportunities</p>
    </div>`;
        } else {
            rejectedRender()
        }

       console.log('Click rejected ');


    }

}


mainContainer.addEventListener('click', function (event) {


    if (event.target.classList.contains('bnt-interview')) {


        const parentNode = event.target.parentNode.parentNode;

        const jobCompany = parentNode.querySelector('.jobCompany').innerText;
        const jobTitle = parentNode.querySelector('.jobTitle').innerText;
        const jobLenths = parentNode.querySelector('.jobLenths').innerText;
        const jobSalary = parentNode.querySelector('.jobSalary').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const notes = parentNode.querySelector('.notes').innerText;


        parentNode.querySelector('.status').innerText = 'Interview'


        const cardinfo = {
            jobCompany,
            jobTitle,
            jobLenths,
            jobSalary,
            status: 'Interview',
            notes

        }

        // console.log(cardinfo);
        const jobCompanyExist = interviewList.find(item => item.jobCompany === cardinfo.jobCompany)

        if (!jobCompanyExist) {
            interviewList.push(cardinfo);

        }



        rejectedList = rejectedList.filter(item => item.jobCompany != cardinfo.jobCompany);

        if (currentStatus == 'btn-rejected') {
            rejectedRender()
        }
        calculateCounts()



    } else if (event.target.classList.contains('btn-rejected')) {


        const parentNode = event.target.parentNode.parentNode;

        const jobCompany = parentNode.querySelector('.jobCompany').innerText;
        const jobTitle = parentNode.querySelector('.jobTitle').innerText;
        const jobLenths = parentNode.querySelector('.jobLenths').innerText;
        const jobSalary = parentNode.querySelector('.jobSalary').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const notes = parentNode.querySelector('.notes').innerText;


        parentNode.querySelector('.status').innerText = 'Rejected '


        const cardinfo = {
            jobCompany,
            jobTitle,
            jobLenths,
            jobSalary,
            status: 'Rejected',
            notes

        }

        // console.log(cardinfo);
        const jobCompanyExist = rejectedList.find(item => item.jobCompany === cardinfo.jobCompany)

        if (!jobCompanyExist) {
            rejectedList.push(cardinfo);

        }

        interviewList = interviewList.filter(item => item.jobCompany != cardinfo.jobCompany);

        if (currentStatus == 'bnt-interview') {
            interviewRender()
        }

        // rejectedRender()
        calculateCounts()

    }



})

function interviewRender() {
    filterSection.innerHTML = ''

    for (let interview of interviewList) {


        let div = document.createElement('div');

        div.className = 'card flex justify-between bg-base-100   shadow-2xl  rounded-2xl p-4';
        div.innerHTML = `
        
              <div>
                        <h2 class="jobCompany">${interview.jobCompany}</h2>
                        <p class="jobTitle">React Native Developer</p>

                        <div class="flex gap-3">

                            <p>Remote </p>
                            <p class="jobLenths">Full-time</p>
                            <p class="jobSalary">$130,000 - $175,000 </p>


                        </div>
                        <button class="status bg-[#eef4ff]  text-[#002c5c] py-2 px-4 font-semibold">${interview.status}</button>

                        <p class="notes">Build cross-platform mobile applications using React Native. Work on products
                            used
                            by millions of
                            users worldwide.</p>
                        <div class=" p-6 flex gap-6">
                            <!-- Interview Button -->
                            <button class="bnt-interview px-4 py-2 rounded border-2 border-green-500 text-green-500 font-semibold 
                             hover:bg-green-500 hover:text-white">
                                INTERVIEW
                            </button>

                            <!-- Rejected Button -->
                            <button class="btn-rejected px-4 py-2 rounded border-2 border-red-500 text-red-500 font-semibold 
                             hover:bg-red-500 hover:text-white ">
                                REJECTED
                            </button>
                        </div>
                    </div>

                      <div id="delete-btn"
                        class=" w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center">

                        <!-- Trash Icon -->
                        <i class="  fa-solid fa-trash text-gray-600 "></i>

                    </div>
        `;

        filterSection.appendChild(div);
    }
}
function rejectedRender() {
    filterSection.innerHTML = ''

    for (let rejected of rejectedList) {


        let div = document.createElement('div');

        div.className = 'card flex justify-between bg-base-100   shadow-2xl  rounded-2xl p-4';
        div.innerHTML = `
        
              <div>
                        <h2 class="jobCompany">${rejected.jobCompany}</h2>
                        <p class="jobTitle">React Native Developer</p>

                        <div class="flex gap-3">

                            <p>Remote </p>
                            <p class="jobLenths">Full-time</p>
                            <p class="jobSalary">$130,000 - $175,000 </p>


                        </div>
                        <button class="status bg-[#eef4ff]  text-[#002c5c] py-2 px-4 font-semibold">${rejected.status}</button>

                        <p class="notes">Build cross-platform mobile applications using React Native. Work on products
                            used
                            by millions of
                            users worldwide.</p>
                        <div class=" p-6 flex gap-6">
                            <!-- Interview Button -->
                            <button class="bnt-interview px-4 py-2 rounded border-2 border-green-500 text-green-500 font-semibold 
                             hover:bg-green-500 hover:text-white">
                                INTERVIEW
                            </button>

                            <!-- Rejected Button -->
                            <button class="btn-rejected px-4 py-2 rounded border-2 border-red-500 text-red-500 font-semibold 
                             hover:bg-red-500 hover:text-white ">
                                REJECTED
                            </button>
                        </div>
                    </div>

                       <div id="delete-btn"
                        class=" w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center">

                        <!-- Trash Icon -->
                        <i class="  fa-solid fa-trash text-gray-600 "></i>

                    </div>
        `;

        filterSection.appendChild(div);
    }
}


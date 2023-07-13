var phoneAPI = 'http://localhost:3000/Phone';
var brandAPI = 'http://localhost:3000/Brand';
var userAPI = 'http://localhost:3000/user';
var cartAPI = 'http://localhost:3000/cart';

function start() {
    render(phoneAPI, renderPhonesnew);
    render(phoneAPI, renderPhoneshot);
    render(brandAPI, renderBrands);
    render(phoneAPI, renderPhonecol1);
    render(phoneAPI, renderPhonecol2);
    render(phoneAPI, renderPhonecol3);
    //detailpage

    render(phoneAPI, renderPhoneside);
   
    render(phoneAPI, renderPhoneshopage);
    render(phoneAPI, renderProductList);
    getUser();  
    registerBtn();


    
}
//home page
function renderPhonesnew(phones) {
    var listphoneblock = document.querySelector('#list-phone-new');
    // Filter phones with the 'phone_new' tag
    var newPhones = phones.filter(function (phone) {
        return phone.tag === 'phone_new';
    });
    const htmls = newPhones.map(function (phone) {
        return `            
            <div class="single-product">
                <div class="product-f-image" >
                    <img src="${phone.img}" alt="">           
                    <div class="product-hover">
                        <a onclick="addToCart(${phone.id})" class="add-to-cart-link">
                            <h6><i class="fa fa-shopping-cart"></i> Thêm vào giỏ hàng</h6>
                        </a>
                        <a href="single-product.html" onclick="renderPhonelink(${phone.id})"  class="view-details-link">
                            <h6><i class="fa fa-link"></i> Xem chi tiết</h6>
                        </a> 
                    </div>
                </div>
                <h2><a href="single-product.html">${phone.name}</a></h2>
                <div class="product-carousel-price">
                    <ins>${phone.price}</ins>
                </div>      
            </div>                  
        `;
    });

    var finalHtml = `
        <div class="latest-product">
            <h2 class="section-title">SẢN PHẨM MỚI</h2>
            <div class="product-carousel">
                ${htmls.join('')}
            </div>     
        </div>
    `;
    
    listphoneblock.innerHTML = finalHtml;
}

function renderPhoneshot(phones) {
    var listphoneblock = document.querySelector('#list-phone-hot');
    var newPhones = phones.filter(function (phone) {
        return phone.tag === 'phone_hot';
    });
    const htmls = newPhones.map(function (phone) {
        return `            
            <div class="single-product" id-data="phone-id-${phone.id}" ">
                <div class="product-f-image" >
                <img  src="${phone.img}" alt="">           
                    <div class="product-hover">
                    <a onclick="renderPhonelink(${phone.id}" class="add-to-cart-link"><h6><i class="fa fa-shopping-cart"></i> Thêm vào giỏ hàng</a></h6>
                    <a href="single-product.html" 
                    onclick="renderPhonelink(${phone.id})"class="view-details-link"><h6><i class="fa fa-link"></i> Xem chi tiết</a></h6> 
                    </div>
                </div>
                <h2><a onclick="renderPhonelink(${phone.id})">${phone.name}</a></h2>
                <div class="product-carousel-price">
                    <ins>${phone.price}</ins>           
                </div>
            </div>
            
        `;
    });

    var finalHtml = `
        <div class="latest-product" >
            <h2 style="margin-top: 50px;" class="section-title">SẢN PHẨM HOT</h2>
            <div class="product-carousel">
                ${htmls.join('')}
            </div>      
        </div>
    `;

    listphoneblock.innerHTML = finalHtml;
}


function renderBrands(brands) {
    var listbrandblock = document.querySelector('#list-brand');
    const htmls = brands.map(function (brand) {
        return `<img src="${brand.img}" alt="">`
    });
    listbrandblock.innerHTML = htmls.join('');
}
function renderPhonecol1(phones) {
    var listphonecol = document.querySelector('#phonecol1');
    var shuffledPhones = phones.sort(() => Math.random() - 0.5);

    const htmls = shuffledPhones.slice(0, 3).map(function (phone) {
        return `
            <div class="single-wid-product">
                <a onclick="renderPhonelink(${phone.id})"><img src="${phone.img}" alt="" class="product-thumb"></a>
                <h2><a href="single-product.html" onclick="renderPhonelink(${phone.id})">${phone.name}</a></h2>
                <div class="product-wid-rating">    
                ${generateStarRating(phone.rating)}
                </div>
                <div class="product-wid-price">
                    <ins>${phone.price}</ins>
                </div>
            </div>
        `;
    });

    var finalHtml = `
      
            <div class="single-product-widget">
                <h2 class="product-wid-title">BÁN CHẠY NHẤT</h2>
                <a href="#" class="wid-view-more">Xem tất cả</a>
                ${htmls.join('')}
            </div>
       
    `;

    listphonecol.innerHTML = finalHtml;
}

function renderPhonecol2(phones) {
    var listphonecol = document.querySelector('#phonecol2');
    var shuffledPhones = phones.sort(() => Math.random() - 0.5);

    const htmls = shuffledPhones.slice(0, 3).map(function (phone) {
        return `
        <div class="single-wid-product">
        <a onclick="renderPhonelink(${phone.id})"><img src="${phone.img}" alt="" class="product-thumb"></a>
        <h2><a  href="single-product.html" onclick="renderPhonelink(${phone.id})">${phone.name}</a></h2>
        <div class="product-wid-rating">    
        ${generateStarRating(phone.rating)}
        </div>
        <div class="product-wid-price">
            <ins>${phone.price}</ins>
        </div>
    </div>
`;
    });

    var finalHtml = `

            <div class="single-product-widget">
                <h2 class="product-wid-title">XEM GẦN ĐÂY</h2>
                <a href="#" class="wid-view-more">Xem tất cả</a>
                ${htmls.join('')}
            </div>
       
    `;

    listphonecol.innerHTML = finalHtml;
}

function renderPhonecol3(phones) {
    var listphonecol = document.querySelector('#phonecol3');
    var shuffledPhones = phones.sort(() => Math.random() - 0.5);

    const htmls = shuffledPhones.slice(0, 3).map(function (phone) {
        return `    
        <div class="single-wid-product">
        <a onclick="renderPhonelink(${phone.id})"><img src="${phone.img}" alt="" class="product-thumb"></a>
        <h2><a  href="single-product.html" onclick="renderPhonelink(${phone.id})">${phone.name}</a></h2>
        <div class="product-wid-rating">    
        ${generateStarRating(phone.rating)}
        </div>
        <div class="product-wid-price">
            <ins>${phone.price}</ins>
        </div>
    </div>
`;
    });

    var finalHtml = `
      
            <div class="single-product-widget">
                <h2 class="product-wid-title">MỚI HÀNG ĐẦU</h2>
                <a href="#" class="wid-view-more">Xem tất cả</a>
                ${htmls.join('')}
            </div>
        
    `;

    listphonecol.innerHTML = finalHtml;
}

function generateStarRating(rating) {
    var stars = '';
    for (var i = 0; i < 5; i++) {
        if (i < rating) {
            stars += '<i class="fa fa-star"></i>';
        } else {
            stars += '<i class="fa fa-star-o"></i>';
        }
    }
    return stars;
}
// detailpage
function renderPhoneside(phones) {
    var listphoneblock = document.querySelector('#list-phone-sp');

    var shuffledPhones = phones.sort(() => Math.random() - 0.5);

    const htmls = shuffledPhones.slice(0, 5).map(function (phone,) {
        return `
            <div class="thubmnail-recent">
                <img src="${phone.img}" class="recent-thumb" alt="">
                <h2><a href="single-product.html" onclick="renderPhonelink(${phone.id})">${phone.name}</a></h2>
                <div class="product-sidebar-price">
                    <ins>${phone.price}</ins>
                </div>
            </div>
        `;
    });

    listphoneblock.innerHTML = htmls.join('');
}

// function renderPhonebotsp(phones) {
//     var listphoneblock = document.querySelector('#listphonebot');
//     const htmls = phones.map(function (phone) {
//         return `            
//         <div class="single-product">
//         <div class="product-f-image">
//             <img src="img/1.jpg" alt="">
//             <div class="product-hover">
//                 <a href="" class="add-to-cart-link"><i class="fa fa-shopping-cart"></i> Thêm vào giỏ</a>
//                 <a href="" class="view-details-link"><i class="fa fa-link"></i> Xem chi tiết</a>
//             </div>
//         </div>

//         <h2><a href="">iPhone 14 Pro Max</a></h2>

//         <div class="product-carousel-price">
//             <ins>26.890.000đ</ins> <del>50.000.000đ</del>
//         </div> 
//     </div>     
//         `;
//     });
//     listphoneblock.innerHTML = htmls.join('');
// }





// phonelinkname
function renderPhonelink(phoneId) {
    localStorage.setItem('phoneId', phoneId);

}

function renderProductList(phones) {
    var productList = document.querySelector('#product-list');
    var shuffledPhones = phones.sort(() => Math.random() - 0.5);
    
    const htmls = shuffledPhones.slice(0, 2).map(function (phone) {
      var productName = phone.name;
      if (productName.length > 20) {
        productName = productName.substring(0, 20) + '...';
      }
      
      return `
        <li class="product">
          <a href="single-product.html">
            <img width="325" height="325" alt="T_4_front" class="attachment-shop_catalog wp-post-image" src="${phone.img}">
            <h3 class="product-name">${productName}</h3>
            <span class="price"><span class="amount">${phone.price}</span></span>
          </a>
    
          <a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="${phone.id}" onclick="renderPhonelink(${phone.id})" rel="nofollow" href="single-product.html">Xem chi tiết</a>
          </li>
      `;
    });
    
    productList.innerHTML = htmls.join('');
  }


function getPhoneIdFromLocalStorage() {
    return localStorage.getItem('phoneId');
}

function fetchPhoneDetails() {

    const phoneId = getPhoneIdFromLocalStorage();
    if (phoneId) {
        fetch(phoneAPI + '/' + phoneId)
            .then(function (response) {
                return response.json();
            })
            .then(function (phone) {

                renderPhoneDetails(phone);
            });
    } else {
        console.log('Không tìm thấy phoneId trong Local Storage.');
    }
}
function renderPhoneDetails(phone) {

    document.getElementById('phonelinkname').innerHTML = phone.name;
    document.getElementById('productname').innerHTML = phone.name;
    document.getElementById('productmainimg').src = phone.img;
    document.getElementById('phoneprice1').innerHTML = phone.price;
    document.getElementById('table_details').innerHTML =
        `
    <tr>
        <th>Thông số</th>
        <th>Giá trị</th>
    </tr>
    <tr>
        <th>Kích thước màn hình</th>
        <td>${phone.screen_size}</td>
    </tr>
    <tr>
        <th>Độ phân giải màn hình</th>
        <td>${phone.screen_resolution}</td>
    </tr>
    <tr>
        <th>Công nghệ màn hình</th>
        <td>${phone.screen_technology}</td>
    </tr>
    <tr>
        <th>Camera sau</th>
        <td>${phone.rear_camera}</td>
    </tr>
    <tr>
        <th>Camera trước</th>
        <td>${phone.front_camera}</td>
    </tr>
    <tr>
        <th>Chipset</th>
        <td>${phone.chipset}</td>
    </tr>
    <tr>
        <th>RAM</th>
        <td>${phone.ram}</td>
    </tr>
    <tr>
        <th>Bộ nhớ trong</th>
        <td>${phone.rom}</td>
    </tr>
    <tr>
        <th>Thẻ SIM</th>
        <td>${phone.simcard}</td>
    </tr>
    <tr>
        <th>Tương thích</th>
        <td>${phone.compatible}</td>
    </tr>
    <tr>
        <th>Pin</th>
        <td>${phone.pin}</td>
    </tr>
    `;

}


function registerBtn() {

    // Gán sự kiện click cho nút Đăng ký
    var registerButton = document.querySelector('#registerLink');
    registerButton.addEventListener('click', function (e) {
        e.preventDefault();
        registerUser();
    });
    // Gán sự kiện keypress cho các trường nhập liệu
    var inputFields = document.querySelectorAll('#registForm');
    inputFields.forEach(function (field) {
        field.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                registerUser();
            };
        });
    });
};

function registerUser() {
    var username = document.querySelector('#username').value;
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;

    // Kiểm tra các giá trị nhập vào
    if (!username || !email || !password) {
        displayAlertMessage('Vui lòng nhập đầy đủ thông tin!', 'danger');
        return;
    }

    // Kiểm tra định dạng email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayAlertMessage('Email không hợp lệ!', 'danger');
        return;
    }

    // Kiểm tra độ dài mật khẩu
    if (password.length < 6) {
        displayAlertMessage('Mật khẩu phải có ít nhất 6 ký tự!', 'danger');
        return;
    }

    // Kiểm tra xem người dùng đã tồn tại hay chưa
    fetch(userAPI)
        .then(function (response) {
            return response.json();
        })
        .then(function (users) {
            var existingUser = users.find(function (user) {
                return user.email === email;
            });

            if (existingUser) {
                displayAlertMessage('Email đã tồn tại', 'danger');
            } else {
                // Thêm người dùng vào API
                var userData = {
                    username: username,
                    email: email,
                    password: password
                };

                addUser(userData);
            };
        })
        .catch(function (error) {
            displayAlertMessage('Đã xảy ra lỗi!', 'danger');
            console.error(error);
        });
};

function addUser(data) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    fetch(userAPI, options)
        .then(function (response) {
            if (response.ok) {
                window.location.href = 'index.html';
                localStorage.setItem(us)
            }
            else {
                displayAlertMessage('Đã xảy ra lỗi!', 'danger');

            }
        })
        .catch(function (error) {
            displayAlertMessage('Đã xảy ra lỗi!', 'danger');
            console.error(error);
        });
};

function getUser() {
    fetch(userAPI)
        .then(function (response) {
            return response.json();
        })
        .then(function (users) {
            document.getElementById('login-link').addEventListener('click', function (event) {
                event.preventDefault(); // Ngăn chặn hành vi chuyển trang mặc định

                loginCheck(users); // Bắt đầu kiểm tra đăng nhập khi người dùng nhấp vào liên kết "Đăng nhập"
            });

            // Xử lý sự kiện nhấn phím "Enter" trên các trường nhập liệu
            document.getElementById('email_namelog').addEventListener('keypress', function (event) {
                if (event.keyCode === 13) {
                    event.preventDefault(); // Ngăn chặn hành vi mặc định của phím "Enter"
                    loginCheck(users);
                }
            });

            document.getElementById('password').addEventListener('keypress', function (event) {
                if (event.keyCode === 13) {
                    event.preventDefault(); // Ngăn chặn hành vi mặc định của phím "Enter"
                    loginCheck(users);
                }
            });
        });
}

function loginCheck(users) {
    var emailOrUsername = document.querySelector('#email_namelog').value;
    var password = document.querySelector('#password').value;
    var user = users.find(function (user) {
        return (user.email === emailOrUsername || user.username === emailOrUsername) && user.password === password;
    });

    if (user) {
        if (user.id === 1) {
            document.getElementById('login-link').href = 'adminpage.html';
        } else {
            document.getElementById('login-link').href = 'index.html';
            localStorage.setItem('  ', user.id);
           
        }

        // Chuyển hướng trực tiếp đến link href
        window.location.href = document.getElementById('login-link').href;
    } else {
        displayAlertMessage('Thông tin đăng nhập không chính xác.!', 'danger');

    }
}

function displayAlertMessage(message, type) {
    var alertmss = document.querySelector('#alert_message');
    var alerthtml = `<div class="alert alert-${type}" role="alert">
          ${message}
      </div>`;
    alertmss.innerHTML = alerthtml;
};


// function addToCart(phone) {
//     const phoneId = phone.product_id;
//     const quantity = phone.quantity;
//     const price = phone.price;
  
//     const cartItem = {
//       user_id: getUserIdFromLocalStorage(),
//       product: {
//         product_id: phoneId,
//         quantity: quantity,
//         price: price
//       }
//     };
  
//     fetch(cartAPI, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(cartItem),
//     })
//         .then(function (response) {
//             if (response.ok) {
//                 console.log('Sản phẩm đã được thêm vào giỏ hàng.');
//             } else {
//                 console.log('Lỗi khi thêm sản phẩm vào giỏ hàng.');
//             }
//         })
//         .catch(function (error) {
//             console.log('Lỗi khi thực hiện yêu cầu:', error);
//         });
// }


function renderPhoneshopage(phones) {
    var listphoneblock = document.querySelector('#list-phone');
  
    var rows = [];
    var currentRow = [];
  
    phones.slice(0, 12).forEach(function (phone, index) {
      currentRow.push(phone);
  
      if (currentRow.length === 4 || index === phones.length - 1) {
        rows.push(currentRow);
        currentRow = [];
      }
    });
  
    const htmls = rows.map(function (row) {
      return `
        <div class="row">
          ${row.map(function (phone) {
            return `
              <div class="col-md-3 col-sm-6">
                <div class="single-shop-product">
                  <div class="product-upper text-center">
                    <img src="${phone.img}" alt="" >
                  </div>
                  <h2 class="text-center product-name"><a  href="single-product.html" onclick="renderPhonelink(${phone.id})">${phone.name}</a></h2>
                  <div class="product-carousel-price text-center">
                    <ins>${phone.price}</ins> 
                  </div>        
                  <div class="product-option-shop text-center">
                    <a class="add_to_cart_button" data-quantity="1" data-product_sku="" data-product_id="${phone.id}" onclick="renderPhonelink(${phone.id})" rel="nofollow" href="single-product.html">Xem chi tiết</a>
                  </div>                       
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
    });
  
    var finalHtml = htmls.join('');
  
    listphoneblock.innerHTML = finalHtml;
  }
// Gọi hàm để lấy thông tin điện thoại khi trang được tải

if (window.location.href.includes('single-product.html')) {
    fetchPhoneDetails();
}


function render(api, callback) {
    fetch(api)
        .then(function (response) {
            return response.json();
        })
        .then(callback);
}                   
start(); 

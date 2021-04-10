import * as actionTypes from "./actionTypes";
import axios from "../../axios";
import fetchCoursesIndex from "../../store/fixtures/fetchCoursesIndex";
import courses from "../../store/fixtures/courses";
// ----------------- Course Index ------------------ //
export const fetchCourseIndexStart = () => {
  return {
    type: actionTypes.FETCH_COURSE_INDEX_START,
  };
};

export const fetchCourseIndexSuccess = (courseIndex) => {
  return {
    type: actionTypes.FETCH_COURSE_INDEX_SUCCESS,
    courseIndex: courseIndex,
  };
};

export const fetchCourseIndexFail = (error) => {
  return {
    type: actionTypes.FETCH_COURSE_INDEX_FAIL,
    error: error,
  };
};

export const fetchCourseIndex = (init) => {
  return (dispatch) => {
    dispatch(fetchCourseIndexStart());

    var response = fetchCoursesIndex;
        dispatch(fetchCourseIndexSuccess(response));
        if (init) {
          dispatch(fetchCourses(response[0].maDanhMuc));
        }
  };
};

// ----------------- Courses List ------------------ //
export const fetchCoursesStart = () => {
  return {
    type: actionTypes.FETCH_COURSES_START,
  };
};

export const fetchCoursesSuccess = (courseList) => {
  return {
    type: actionTypes.FETCH_COURSES_SUCCESS,
    courseList: courseList,
  };
};

export const fetchCoursesFail = (error) => {
  return {
    type: actionTypes.FETCH_COURSES_FAIL,
    error: error,
  };
};

export const fetchCourses = (courseType, group, keyWord) => {
  return (dispatch) => {
    dispatch(fetchCoursesStart());
    if (group === undefined) {
      group = "GP08";
    }
    let url = `/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${courseType}&MaNhom=${group}`;
    if (courseType === "all") {
      url = `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${group}`;
    }
    if (keyWord) {
      url = `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${keyWord}&MaNhom=${group}`;
    }

    var response = courses.filter(el => el.danhMucKhoaHoc.maDanhMucKhoahoc == courseType);
 
    // firebase fetching of couses is required
    // var response = [{"maKhoaHoc":"back-end-001","biDanh":"Education Content Development","tenKhoaHoc":"Education Content Development","moTa":"This course guides you from beginner to expert. Without knowledge bases, you'll become a master skilled Web Developer!","luotXem":1224,"hinhAnh":"https://elearning0706.cybersoft.edu.vn/hinhanh/5-programming-languages-front-end-back-end-web-development.jpg","maNhom":"GP08","ngayTao":"23/02/2020","soLuongHocVien":0,"nguoiTao":{"taiKhoan":"adminttt","hoTen":"adminttt","maLoaiNguoiDung":"GV","tenLoaiNguoiDung":"Giáo vụ"},"danhMucKhoaHoc":{"maDanhMucKhoahoc":"BackEnd","tenDanhMucKhoaHoc":"Lập trình Backend"}},{"maKhoaHoc":"back-end-003","biDanh":"Curriculum Design","tenKhoaHoc":"Curriculum Design","moTa":"fdasc testing23432","luotXem":0,"hinhAnh":"https://elearning0706.cybersoft.edu.vn/hinhanh/dsa.jpg","maNhom":"GP08","ngayTao":"19/11/2020","soLuongHocVien":0,"nguoiTao":{"taiKhoan":"adminttt","hoTen":"adminttt","maLoaiNguoiDung":"GV","tenLoaiNguoiDung":"Giáo vụ"},"danhMucKhoaHoc":{"maDanhMucKhoahoc":"backEnd","tenDanhMucKhoaHoc":"Lập trình Backend"}},{"maKhoaHoc":"backendf11","biDanh":"Quality Control","tenKhoaHoc":"Quality Control","moTa":"This course guides you from beginner to expert. Without knowledge bases, you'll become a master skilled Web Developer!","luotXem":0,"hinhAnh":"https://elearning0706.cybersoft.edu.vn/hinhanh/advanced-react-and-redux-2018-edition.png","maNhom":"GP08","ngayTao":"16/08/2020","soLuongHocVien":0,"nguoiTao":{"taiKhoan":"caochihieu","hoTen":"Cao Chi Hieu","maLoaiNguoiDung":"GV","tenLoaiNguoiDung":"Giáo vụ"},"danhMucKhoaHoc":{"maDanhMucKhoahoc":"BackEnd","tenDanhMucKhoaHoc":"Lập trình Backend"}},{"maKhoaHoc":"backendfrc","biDanh":"K12 Video Lessons","tenKhoaHoc":"K-12 Video Courses","moTa":"React can also render on the server using Node and power mobile apps using React Native.","luotXem":0,"hinhAnh":"https://elearning0706.cybersoft.edu.vn/hinhanh/advandge-programming.png","maNhom":"GP08","ngayTao":"16/08/2020","soLuongHocVien":0,"nguoiTao":{"taiKhoan":"caochihieu","hoTen":"Cao Chi Hieu","maLoaiNguoiDung":"GV","tenLoaiNguoiDung":"Giáo vụ"},"danhMucKhoaHoc":{"maDanhMucKhoahoc":"BackEnd","tenDanhMucKhoaHoc":"Lập trình Backend"}}]
    // axios
    //   .get(url)
    //   .then((response) => {
        dispatch(fetchCoursesSuccess(response));
      // })
      // .catch((error) => {
      //   dispatch(fetchCoursesFail(error));
      // });
  };
};

// ----------------- Course Detail ------------------ //
export const fetchCourseDetailStart = () => {
  return {
    type: actionTypes.FETCH_COURSE_DETAIL_START,
  };
};

export const fetchCourseDetailSuccess = (courseDetail) => {
  return {
    type: actionTypes.FETCH_COURSE_DETAIL_SUCCESS,
    courseDetail: courseDetail,
  };
};

export const fetchCourseDetailFail = (error) => {
  return {
    type: actionTypes.FETCH_COURSE_DETAIL_FAIL,
    error: error,
  };
};

export const fetchCourseDetail = (courseId) => {
  return (dispatch) => {
    dispatch(fetchCourseDetailStart());
    axios
      .get(`/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseId}`)
      .then((response) => {
        dispatch(fetchCourseDetailSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchCourseDetailFail(error));
      });
  };
};

// ----------------- User Detail ------------------ //
export const fetchUserDetailStart = () => {
  return {
    type: actionTypes.FETCH_USER_DETAIL_FAIL,
  };
};

export const fetchUserDetailSuccess = (userDetail) => {
  return {
    type: actionTypes.FETCH_USER_DETAIL_SUCCESS,
    userDetail: userDetail,
  };
};

export const fetchUserDetailFail = (error) => {
  return {
    type: actionTypes.FETCH_USER_DETAIL_FAIL,
    error: error,
  };
};

export const fetchUserDetail = () => {
  return (dispatch) => {
    dispatch(fetchUserDetailStart());
    const user = JSON.parse(localStorage.getItem("user"));
    const url = "/QuanLyNguoiDung/ThongTinTaiKhoan";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${user.accessToken}`,
    };
    const data = {
      taiKhoan: user.taiKhoan,
    };

    axios({ method: "post", url, headers, data })
      .then((response) => {
        // console.log("User Detail: ", response.data);
        dispatch(fetchUserDetailSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchUserDetailFail(error));
      });
  };
};

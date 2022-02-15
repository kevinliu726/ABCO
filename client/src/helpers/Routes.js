import Monitor from "../pages/Monitor";
import Inquiry from "../pages/Inquiry";
import Maintain from "../pages/Maintain";
import Information from "../pages/Information";
import Login from "../pages/Login";
import Queue from "../subpages/Queue";
import Market from "../subpages/Market";
import ActivateStatus from "../subpages/ActivateStatus";
import Daily from "../subpages/Daily";
import UserMaintain from "../subpages/UserMaintain";
import MyInfoMaintain from "../subpages/MyInfoMaintain";
import EntrustDealInquiry from "../subpages/EntrustDealInquiry";
import Salesperson from "../subpages/Salesperson";
import FIX from "../subpages/FIX";
import TradeMonitor from "../subpages/TradeMonitor";
import RiskMng from "../subpages/RiskMng";
import SuccessOrder from "../subpages/SuccessOrder";
import ModifySetting from "../subpages/ModifySetting";
import UsrRiskMngSetting from "../subpages/UsrRiskMngSetting";
import InventoryInfo from "../subpages/InventoryInfo";
import StockBasicInfo from "../subpages/StockBasicInfo";
import CustomerBasicInfo from "../subpages/CustomerBasicInfo";
import PreStockList from "../subpages/PreStockList";
import SystemParameter from "../subpages/SystemParameter";

const routes = [
  {
    path: "/login",
    element: Login,
    isPrivate: false,
    exact: true,
  },
  {
    path: "/monitor",
    element: Monitor,
    title: "監控查詢",
    isPrivate: true,
    exact: true,
  },
  {
    path: "/monitor/ActivateStatus",
    element: ActivateStatus,
    title: "程式啟動狀態",
    isPrivate: true,
    exact: true,
  },
  {
    path: "/monitor/Queue",
    element: Queue,
    title: "QUE流量統計",
    isPrivate: true,
    exact: true,
  },
  {
    path: "/monitor/Market",
    element: Market,
    title: "市場狀態查詢",
    isPrivate: true,
    exact: true,
  },
  {
    path: "/monitor/Daily",
    element: Daily,
    title: "每日轉檔查詢",
    isPrivate: true,
    exact: true,
  },
  {
    path: "/inquiry",
    element: Inquiry,
    title: "下單查詢",
    isPrivate: true,
    exact: true,
  },
  {
    path: "/inquiry/FIX",
    element: FIX,
    title: "FIX委託下單",
    isPrivate: true,
    exact: true,
  },
  {
    path: "/inquiry/TradeMonitor",
    element: TradeMonitor,
    title: "交易監控放行",
    isPrivate: true,
    exact: true,
  },
  {
    path: "/inquiry/RiskManagement",
    element: RiskMng,
    title: "風控統計查詢",
    isPrivate: true,
    exact: true,
  },
  {
    path: "/inquiry/SuccessOrder",
    element: SuccessOrder,
    title: "成交明細查詢",
    isPrivate: true,
    exact: true,
  },
  {
    path: "/inquiry/ModifySetting",
    element: ModifySetting,
    title: "預收異動設定",
    isPrivate: true,
    exact: true,
  },
  {
    path: "/inquiry/UsrRiskMngSetting",
    element: UsrRiskMngSetting,
    title: "客戶風控設定",
    isPrivate: true,
    exact: true,
  },
  {
    path: "/inquiry/StockBasicInfo",
    element: StockBasicInfo,
    title: "股票基本資料",
    isPrivate: true,
    exact: true,
  },
  {
    path: "/inquiry/CustomerBasicInfo",
    element: CustomerBasicInfo,
    title: "客戶基本資料",
    isPrivate: true,
    exact: true,
  },
  {
    path: "/inquiry/InventoryInfo",
    element: InventoryInfo,
    title: "庫存基本資料",
    isPrivate: true,
    exact: true,
  },
  {
    path: "/inquiry/PreStockList",
    element: PreStockList,
    title: "預收股票清單",
    isPrivate: true,
    exact: true,
  },
  {
    path: "/inquiry/Salesperson",
    element: Salesperson,
    title: "營業員查詢",
    isPrivate: true,
    exact: true,
  },
  {
    path: "/inquiry/SystemParameter",
    element: SystemParameter,
    title: "公用系統參數",
    isPrivate: true,
    exact: true,
  },
  {
    path: "/inquiry/EntrustDealInquiry",
    element: EntrustDealInquiry,
    title: "委託成交累計查詢",
    isPrivate: true,
    exact: true,
  },
  {
    path: "/maintain",
    element: Maintain,
    title: "檔案維護",
    isPrivate: true,
    exact: true,
  },
  {
    path: "/maintain/UserMaintain",
    element: UserMaintain,
    title: "使用者維護畫面",
    isPrivate: true,
    exact: true,
  },
  {
    path: "/maintain/使用者選單設定",
    element: Maintain,
    title: "使用者選單設定",
    isPrivate: true,
    exact: true,
  },
  {
    path: "/information",
    element: Information,
    title: "個人資料",
    isPrivate: true,
    exact: true,
  },
  {
    path: "/information/MyInfoMaintain",
    element: MyInfoMaintain,
    title: "個人資料維護",
    isPrivate: true,
    exact: true,
  },
];

export default routes;

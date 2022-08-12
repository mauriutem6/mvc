using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace mvc.Controllers
{
    public class wsController : Controller
    {
        public string get_github()
        {
            StreamReader StreamReader_ = null;

            string url_api = String.Format(ConfigurationManager.AppSettings["config_github"]);
            
            

            var requestWS = (HttpWebRequest)WebRequest.Create(url_api);
            requestWS.Timeout = 60000;
            requestWS.Method = "GET";
            requestWS.ContentType = "text/plain;charset=utf-8";

            HttpWebResponse resprequestWSget_usuario = requestWS.GetResponse() as HttpWebResponse;
            Stream respStreamBrake1 = resprequestWSget_usuario.GetResponseStream();
            StreamReader_ = new StreamReader(respStreamBrake1, Encoding.UTF8);

            url_api = StreamReader_ == null ? "" : StreamReader_.ReadToEnd();
            return url_api;
        }

        [HttpPost]
        public string set_CrearUsuario(string name, string email, string password)
        {
            StreamReader StreamReader_ = null;

            string url_api = String.Format(ConfigurationManager.AppSettings["set_CrearUsuario"], name, email, password);

            var requestWS = (HttpWebRequest)WebRequest.Create(url_api);
            requestWS.Timeout = 60000;
            requestWS.Method = "GET";
            requestWS.ContentType = "text/plain;charset=utf-8";

            HttpWebResponse resprequestWSget_usuario = requestWS.GetResponse() as HttpWebResponse;
            Stream respStreamBrake1 = resprequestWSget_usuario.GetResponseStream();
            StreamReader_ = new StreamReader(respStreamBrake1, Encoding.UTF8);

            url_api = StreamReader_ == null ? "" : StreamReader_.ReadToEnd();
            return url_api;
        }

        [HttpPost]
        public string get_Login(string email, string password)
        {
            StreamReader StreamReader_ = null;

            string url_api = String.Format(ConfigurationManager.AppSettings["get_Login"], email, password);

            var requestWS = (HttpWebRequest)WebRequest.Create(url_api);
            requestWS.Timeout = 60000;
            requestWS.Method = "GET";
            requestWS.ContentType = "text/plain;charset=utf-8";

            HttpWebResponse resprequestWSget_usuario = requestWS.GetResponse() as HttpWebResponse;
            Stream respStreamBrake1 = resprequestWSget_usuario.GetResponseStream();
            StreamReader_ = new StreamReader(respStreamBrake1, Encoding.UTF8);

            url_api = StreamReader_ == null ? "" : StreamReader_.ReadToEnd();
            return url_api;
        }




    }
}
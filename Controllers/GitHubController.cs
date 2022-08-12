using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace mvc.Controllers
{
    public class GitHubController : Controller
    {
        // GET: GitHub
        public ActionResult Index()
        {
            ViewBag.cantidad_archivos_repositorio_github = ConfigurationManager.AppSettings["cantidad_archivos_repositorio_github"];

            return View();
        }
    }
}
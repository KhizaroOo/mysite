using Microsoft.AspNetCore.Mvc;

namespace web.Controllers
{
    public class ToolboxController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}

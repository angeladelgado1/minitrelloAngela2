﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MiniTrello.Api.Models
{
    public class BoardModel
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public long OrganizationId { get; set; }
    }
}
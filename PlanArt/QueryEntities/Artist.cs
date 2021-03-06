﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PlanArt.QueryEntities
{
    public class Artist
    {
        public string email { get; set; } //
        public string city { get; set; } //
        public string lastname { get; set; } //
        public string firstname { get; set; } //
        public string nickname { get; set; } //    
        public string password { get; set; } //   
        public string picture { get; set; } //
        public List<string> following { get; set; } //

        public Artist()
        {
            following = new List<string>();
        }

        public Artist(string email, string password, string city, string firstname, string lastname, string nickname, string picture)
        {
            this.email = email;
            this.password = password;
            this.city = city;
            this.firstname = firstname;
            this.lastname = lastname;
            this.nickname = nickname;
            this.picture = picture;
            following = new List<string>();
        }
    }
}

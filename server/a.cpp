#include<iostream>
using namespace std ;

int main()
{
    int ds = 9 , de = 12;
    int us , ue ;
    cin>> us >> ue ;
    //  ue > ds && ue < de ||
    if( ue <= ds || us >= de)
    {
        cout<<" allowed..";
        return  0;
    }

   
   cout<<" not  allowed..";

    return 0 ;
}
#include <bits/stdc++.h>
using namespace std;

void solution(int t)
{
    double n;
    cin >> n;

    double ans = 0;
    for (int i = 1; i <= n; i++)
    {
        ans += (double)n / i;
    }
    cout << "Case " << t << ": " << ans << setprecision(15) << endl;
}

int main()
{
    int t;
    cin >> t;

    for (int i = 1; i <= t; i++)
    {
        solution(i);
    }

    return 0;
}